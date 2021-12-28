import {
  FC,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { makeStyles } from '@mui/styles';
import { IconButton as MuiIconButton, Theme } from '@mui/material';
import { FiberManualRecord as FiberManualRecordIcon, Stop as StopIcon } from '@mui/icons-material';
import {
  styled,
  experimental_sx as sx,
} from '@mui/system';
import clsx from 'clsx';
import { getSupportedMimeTypes } from './utils';

interface VideoInputProps {
  urlSource?: string;
  onChange?: (newUrlSource: string) => void;
  className?: string;
}

const VideoInput: FC<VideoInputProps> = ({ urlSource, onChange, className }) => {
  const classes = useStyles();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const chunks = useRef<Blob[]>([]);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [mimeType] = useState(getSupportedMimeTypes()[0]);

  const onStopRecording = useCallback(() => {
    const superBuffer = new Blob(chunks.current, { type: mimeType });

    if (videoRef.current) {
      videoRef.current.src = '';
      videoRef.current.srcObject = null;
      const newUrlSource = window.URL.createObjectURL(superBuffer);
      videoRef.current.src = newUrlSource;
      videoRef.current.muted = false;
      videoRef.current.play();

      if (onChange) { onChange(newUrlSource); }
    }
  }, [mimeType, onChange]);

  const initCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.srcObject = stream;
      videoElement.muted = true;
      videoElement.play();
    }
  };

  const _handleClickInitRecord = async () => {
    try {
      if (!videoRef.current?.srcObject) {
        await initCamera();
      }

      chunks.current = [];
      const options = { mimeType };

      mediaRecorder.current = new MediaRecorder(videoRef.current?.srcObject as MediaStream, options);

      mediaRecorder.current.onstop = onStopRecording;

      mediaRecorder.current.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          chunks.current.push(event.data);
        }
      };

      // cada segundo
      mediaRecorder.current.start(1000);
      setIsRecording(true);
    } catch (error) {
      console.log('error', error);
    }
  };

  const _handleClickStopRecording = () => {
    setIsRecording(false);
    mediaRecorder.current?.stop();
  };

  useEffect(() => {
    initCamera();
  }, []);

  return (
    <div className={clsx(className, classes.root)}>
      <video src={urlSource} ref={videoRef} className={classes.video} />
      <div className={classes.recordControls}>
        {isRecording ? (
          <IconButton
            disableRipple
            onClick={_handleClickStopRecording}
          >
            <StopIcon />
          </IconButton>
        ) : (
          <IconButton
            disableRipple
            onClick={_handleClickInitRecord}
          >
            <FiberManualRecordIcon sx={{
              color: 'error.main',
            }}
            />
          </IconButton>
        )}
      </div>
    </div>
  );
};

const IconButton = styled(MuiIconButton)(
  sx({
    bgcolor: 'rgba(255,255,255, .7)',
    '&:hover': {
      bgcolor: 'white',
    },
    borderRadius: 2,
  }),
);

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    position: 'relative',
    backgroundColor: 'black',
  },
  video: {
    height: 600,
    width: '100%',
  },
  recordControls: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: theme.spacing(2.5),
    overflow: 'hidden',
  },
  iconButtonControl: {
    backgroundColor: 'red',
  },
}), { name: 'VideoInput' });

export default VideoInput;

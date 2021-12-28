import { Button, Typography } from '@mui/material';
import VideoInput from '@components/VideoInput';
import { FC, useContext } from 'react';
import { Box } from '@mui/system';
import VodContext from './context';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface QuestionDetailProps {

}

const QuestionDetail: FC<QuestionDetailProps> = () => {
  const {
    currentQuestion,
    isTheLast,
    goNext,
    goPrev,
  } = useContext(VodContext);

  const _handleChangeLastSourceQuestion = (newUrlSource: string) => {
    console.log('newUrlSource', newUrlSource);
  };

  return (
    <div>
      <Typography variant="h5" sx={{ mt: 1.5, mb: 1.5 }}>
        {currentQuestion?.statement}
      </Typography>
      <VideoInput
        urlSource={currentQuestion?.lastAnswer?.urlSource}
        onChange={_handleChangeLastSourceQuestion}
      />
      <Box justifyContent="space-between" display="flex" sx={{ width: '100%', mt: 2.5 }}>
        <Button size="large" variant="outlined" onClick={goPrev}>Anterior</Button>
        {isTheLast ? (
          <Button size="large" variant="outlined">Terminar</Button>
        ) : (
          <Button size="large" variant="outlined" onClick={goNext}>Siguiente</Button>
        )}
      </Box>
    </div>
  );
};

export default QuestionDetail;

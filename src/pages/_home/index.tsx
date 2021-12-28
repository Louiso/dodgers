import {
  FC, Fragment, useCallback, useMemo, useState,
} from 'react';
import {
  Avatar,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Theme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { mongoObjectId } from '@utils/generators';
import QuestionDetail from './QuestionDetail';
import VodContext, { Vod } from './context';

const vodInit: Vod = {
  _id: mongoObjectId(),
  questions: [{
    _id: mongoObjectId(),
    statement: 'What is the best way to learn React?',
    lastAnswer: null,
  }, {
    _id: mongoObjectId(),
    statement: 'Cual es tu lenguaje favorito?',
    lastAnswer: null,
  }, {
    _id: mongoObjectId(),
    statement: 'Iras a la chocalatada de sireral?',
    lastAnswer: null,
  }, {
    _id: mongoObjectId(),
    statement: 'Haber suelta tu ga?',
    lastAnswer: null,
  }],
};

const HomePage: FC = () => {
  const classes = useStyles();

  const [vod] = useState(vodInit);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number | null>(0);

  const currentQuestion = useMemo(
    () => ((currentQuestionIndex ?? null) !== null ? vod.questions[currentQuestionIndex!] : null),
    [currentQuestionIndex, vod.questions],
  );

  const _handleClickQuestionItem = (questionIndex: number) => () => {
    setCurrentQuestionIndex(questionIndex);
  };

  const isTheLast = useMemo(() => {
    const allEmptyAnswers = vod.questions.filter((question) => question.lastAnswer === null);

    return allEmptyAnswers.length === 1 && allEmptyAnswers[0]._id === currentQuestion?._id;
  }, [currentQuestion?._id, vod.questions]);

  const goNext = useCallback(() => {
    const newCurrentQuestionIndex = (currentQuestionIndex ?? 0) + 1;
    if (vod.questions[newCurrentQuestionIndex]) { setCurrentQuestionIndex(newCurrentQuestionIndex); }
  }, [currentQuestionIndex, vod.questions]);

  const goPrev = useCallback(() => {
    const newCurrentQuestionIndex = (currentQuestionIndex ?? 0) - 1;
    if (vod.questions[newCurrentQuestionIndex]) { setCurrentQuestionIndex(newCurrentQuestionIndex); }
  }, [currentQuestionIndex, vod.questions]);

  return (
    <VodContext.Provider
      value={{
        vod,
        currentQuestion,
        isTheLast,
        goNext,
        goPrev,
      }}
    >
      <div>
        <Container>
          <Grid justifyContent="center" display="flex">
            <Grid
              item
              xs={6}
            >
              {currentQuestion ? (
                <QuestionDetail />
              ) : (
                <List>
                  {vod.questions.map((question, index) => (
                    <Fragment key={question._id}>
                      <ListItem alignItems="flex-start" className={classes.listItem} onClick={_handleClickQuestionItem(index)}>
                        <ListItemAvatar>
                          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                          primary={question.statement}
                          secondaryTypographyProps={{
                            variant: 'body2',
                          }}
                          secondary={question.lastAnswer?.createdAt ?? 'No hay respuesta'}
                        />
                      </ListItem>
                      {index < vod.questions.length - 1 && <Divider variant="fullWidth" />}
                    </Fragment>
                  ))}
                </List>
              )}

            </Grid>
          </Grid>
        </Container>
      </div>
    </VodContext.Provider>
  );
};

const useStyles = makeStyles<Theme>((theme) => ({
  listItem: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette?.primary[50],
    },
  },
}), { name: 'HomePage' });

export default HomePage;

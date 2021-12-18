import {
  Card,
  CardContent,
  CardHeader,
  List, ListItem, ListItemText, TextField,
  Box,
  ListItemSecondaryAction,
  IconButton,
  ListItemAvatar,
  Theme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useMemo, useState } from 'react';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import clsx from 'clsx';
import { mongoObjectId } from '../../utils/generator';
import { Task, TaskStatus } from '../../interfaces';
import TaskDetail from './TaskDetail';

const TaskList = () => {
  const classes = useStyles();
  const [taskTitle, setTaskTitle] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTaskId, setCurrentTaskId] = useState<string>('');

  const currentTask = useMemo(() => tasks.find((task) => task._id === currentTaskId), [currentTaskId, tasks]);

  const _handleChange = ({ target: { value } }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setTaskTitle(value);
  };

  const _handleSubmitCreateNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTasks((prev) => [...prev, {
      _id: mongoObjectId(),
      title: taskTitle,
      description: '',
      status: TaskStatus.Pending,
    }]);

    setTaskTitle('');
  };

  const _handleClickDeleteTask = (taskId: string) => () => {
    setTasks((prev) => prev.filter((task) => task._id !== taskId));
  };

  const _handleClickEditTask = (taskId: string) => () => {
    setCurrentTaskId(taskId);
  };

  const _handleChangeTask = (newTask: Task) => {
    setTasks((prev) => prev.map((task) => {
      if (task._id === newTask._id) {
        return {
          ...task,
          ...newTask,
        };
      }
      return task;
    }));
    setCurrentTaskId('');
  };

  const _handleCancelEdit = () => {
    setCurrentTaskId('');
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Card sx={{
        width: 800,
        height: 600,
      }}
      >
        <CardHeader title="Todo List" />
        <CardContent>
          {currentTask ? (
            <TaskDetail
              task={currentTask}
              onChange={_handleChangeTask}
              onCancel={_handleCancelEdit}
            />
          ) : (
            <form onSubmit={_handleSubmitCreateNewTask}>
              <TextField fullWidth size="small" value={taskTitle} onChange={_handleChange} />
            </form>
          )}
          <List sx={{ mt: 2.5 }}>
            {tasks.map((task) => (
              <ListItem key={task._id}>
                <ListItemAvatar sx={{
                  minWidth: 28,
                }}
                >
                  <div className={clsx(classes.dot, classes[task.status])} />
                </ListItemAvatar>
                <ListItemText primary={task.title} secondary={task.description} />
                {!currentTaskId && (
                  <ListItemSecondaryAction>
                    <IconButton onClick={_handleClickEditTask(task._id)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={_handleClickDeleteTask(task._id)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                )}
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

const useStyles = makeStyles<Theme>((theme) => ({
  dot: {
    width: 18,
    height: 18,
    borderRadius: '50%',
  },
  pending: {
    backgroundColor: theme.palette.grey[300],
  },
  doing: {
    backgroundColor: theme.palette.grey[300],
  },
  finished: {
    backgroundColor: theme.palette.grey[300],
  },
}), { name: 'TaskList' });

export default TaskList;

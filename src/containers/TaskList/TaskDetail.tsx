import { Button, TextField } from '@mui/material';
import { FC, useState } from 'react';
import { Task } from '../../interfaces';

interface TaskDetailProps {
  task: Task;
  onChange: (newTask: Task) => void;
  onCancel: () => void;
  action?: React.ReactNode;
}

const TaskDetail: FC<TaskDetailProps> = ({
  task, onChange, onCancel, action,
}) => {
  const [state, setState] = useState<Task>(task);

  const _handleSubmitCreateNewTask = () => {
    onChange(state);
  };

  const _handleChange = ({ target: { value, name } }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <TextField
        fullWidth
        size="small"
        name="title"
        value={state.title}
        label="Titulo"
        onChange={_handleChange}
      />
      <TextField
        sx={{
          mt: 1.5,
        }}
        fullWidth
        size="small"
        label="Description"
        name="description"
        value={state.description}
        onChange={_handleChange}
      />
      {action}
      <div>
        <Button onClick={onCancel}>Cancelar</Button>
        <Button onClick={_handleSubmitCreateNewTask}>Guardar</Button>
      </div>
    </div>
  );
};

export default TaskDetail;

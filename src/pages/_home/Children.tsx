import { Button } from '@mui/material';
import { forwardRef, memo } from 'react';

interface ChildrenProps {
  onClick: () => void;
  valueDouble?: any;
}

const Children = forwardRef<any, ChildrenProps>(({ onClick, valueDouble }, ref) => {
  console.log('pappiiiii ya naci!!!!');

  console.log('valueDouble', valueDouble);
  // const sendHola = () => {
  //   console.log('hola');
  // };

  return (
    <div>
      <Button ref={ref} onClick={onClick}>
        Click desde hijo
      </Button>
    </div>
  );
});

export default memo(Children);

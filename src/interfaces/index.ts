export enum TaskStatus {
  Pending = 'pending', // gris
  Doing = 'doing', // green
  Finished = 'finished' // blue
}

export interface Task {
  _id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

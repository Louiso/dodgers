import { createContext } from 'react';

export interface Question {
  _id: string;
  statement : string;
  lastAnswer?: {
    _id: string;
    urlSource: string;
    createdAt: Date;
  } | null;
}

export interface Vod {
  _id: string;
  questions: Question[];
}

const VodContext = createContext<{
  vod?: Vod | null,
  currentQuestion?: Question | null,
  isTheLast?: boolean,
  goPrev:() => void,
  goNext: () => void,
    }>({
      vod: null,
      currentQuestion: null,
      isTheLast: false,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      goPrev: () => {},
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      goNext: () => {},
    });

export default VodContext;

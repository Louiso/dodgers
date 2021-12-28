import { ThemeProvider } from '@mui/material';
import { FC } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from '../pages/_home';
import theme from '../theme';

const NoFoundPage: FC = () => (
  <div>Not Found: 404</div>
);

const Root: FC = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NoFoundPage />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default Root;

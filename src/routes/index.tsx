import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from '../pages/_home';

const Root = () => {
  console.log('adawdawdwa');
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={<HomePage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;

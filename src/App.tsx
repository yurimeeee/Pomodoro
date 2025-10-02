import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from '@pages/Home';
import Layout from '@components/layout/Layout';
import NotFoundPage from '@pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

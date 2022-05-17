import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact="true"
          path="/"
          element={<HomePage />}
        />
        <Route
          exact="true"
          path="/country/:country"
          element={<DetailsPage />}
        />
      </Routes>
    </div>
  );
}

export default App;

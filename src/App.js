import './App.scss';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

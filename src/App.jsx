import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import esES from 'antd/locale/es_ES';
import Layout from './components/Layout';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Opcion1 from './pages/Opcion1';
import Opcion2 from './pages/Opcion2';
import Opcion3 from './pages/Opcion3';
import Opcion4 from './pages/Opcion4';
import Opcion5 from './pages/Opcion5';
import Opcion6 from './pages/Opcion6';

function App() {
  return (
    <ConfigProvider locale={esES}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/signin" replace />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="opcion1" element={<Opcion1 />} />
            <Route path="opcion2" element={<Opcion2 />} />
            <Route path="opcion3" element={<Opcion3 />} />
            <Route path="opcion4" element={<Opcion4 />} />
            <Route path="opcion5" element={<Opcion5 />} />
            <Route path="opcion6" element={<Opcion6 />} />
          </Route>
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
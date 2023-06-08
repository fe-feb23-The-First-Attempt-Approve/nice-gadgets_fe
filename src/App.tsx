import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PhonePage } from './pages/PhonesPage';
import { Footer } from './components/Footer';

const App = () => (
  <>
    <Header />

    <div className="content">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="/phones">
          <Route index element={<PhonePage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>

    <Footer />
  </>
);

export default App;

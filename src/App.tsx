import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';
import { TabletsPage } from './pages/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { CartPage } from './pages/CartPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AboutPage } from './pages/AboutPage';
import { Footer } from './components/Footer';
import { Contacts } from './pages/Contacts';
import { AutorizationForm } from './components/AutorizationForm';
import { ActivationPage } from './pages/ActivationPage';

const App = () => (
  <>
    <Header />

    <div className="content">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="/phones">
          <Route index element={<PhonesPage />} />
          <Route path=":deviceSlug" element={<AboutPage />} />
        </Route>

        <Route path="/tablets">
          <Route index element={<TabletsPage />} />
          <Route path=":deviceSlug" element={<AboutPage />} />

        </Route>

        <Route path="/accessories">
          <Route index element={<AccessoriesPage />} />
          <Route path=":deviceSlug" element={<AboutPage />} />
        </Route>

        <Route path="/favorites">
          <Route index element={<FavoritesPage />} />
        </Route>

        <Route path="/cart">
          <Route index element={<CartPage />} />
        </Route>

        <Route path="/contacts">
          <Route index element={<Contacts />} />
        </Route>

        <Route path="/not-found-page" element={<NotFoundPage />} />

        <Route path="*" element={<Navigate to="/not-found-page" replace />} />

        <Route path="/activation">
          <Route path=":Link" element={<ActivationPage />} />
        </Route>

      </Routes>
    </div>

    <ToastContainer />
    <Footer />

    <AutorizationForm />
  </>
);

export default App;

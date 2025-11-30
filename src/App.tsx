import './styles/App.css'
import AppRoutes from './routes/Routes';
import { AuthProvider } from './features/auth/contexts/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';

function App() {

  return (
    <HelmetProvider>
      <AuthProvider>
      <AppRoutes />
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App

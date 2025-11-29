import './styles/App.css'
import AppRoutes from './routes/Routes';
import { AuthProvider } from './features/auth/contexts/AuthProvider';

function App() {

  return (
    <AuthProvider>
    <AppRoutes />
    </AuthProvider>
  );
}

export default App

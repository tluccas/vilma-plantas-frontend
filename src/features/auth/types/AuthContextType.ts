import type { AuthUser } from "./AuthUser";
import type { LoginData, RegisterData } from "./AuthTypes";

export interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  isAuthenticated: boolean;
  isInitialized: boolean;
  login: (data: LoginData) => Promise<AuthUser>;
  register: (data: RegisterData) => Promise<AuthUser>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

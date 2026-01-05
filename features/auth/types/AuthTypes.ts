export interface LoginData {
    email: string;
    password: string;
}

export interface RegisterData {
    name: string;
    email: string;
    password: string;
    // confirmPassword: string; Opcional mas provavelmente eu vá inserir depois
}

export interface AuthResponse {
    user: {
        id: number;
        name: string;
        email: string
    };

    message: string;
}
# Estrutura do Projeto Vilma Plantas - Frontend

## Organização Atualizada dos Diretórios

```
/src
 ├── assets/                 # Imagens, ícones, logos, fontes…
 │    └── react.svg
 │
 ├── components/             # Componentes reutilizáveis
 │    ├── ui/                # Componentes genéricos e reutilizáveis (design system)
 │    │    └── LogoutButton.tsx
 │    ├── layout/            # Header, Footer, Navbar, Sidebar…
 │    │    └── Dashboard/    # Componentes específicos do Dashboard
 │    │         ├── DashboardCard.tsx
 │    │         ├── Orders.tsx
 │    │         ├── SlideBar.tsx
 │    │         ├── SlidebarItem.tsx
 │    │         └── sections/
 │    │              ├── Overview.tsx
 │    │              ├── Settings.tsx
 │    │              └── UserProfilePage.tsx
 │    ├── user/              # Componentes relacionados ao usuário
 │    │    └── UserProfile.tsx
 │    └── Loading.tsx        # Componente de loading global
 │
 ├── features/               # Domínios (DDD-like) => cada área isolada
 │    ├── products/          # Feature de produtos (futuro)
 │    │     ├── components/  # Componentes específicos (ProductCard, ProductGrid…)
 │    │     ├── pages/       # Páginas dessa feature
 │    │     └── services/    # Lógica de API dessa feature
 │    │
 │    ├── cart/              # Feature do carrinho (futuro)
 │    │     ├── components/
 │    │     ├── pages/
 │    │     └── store/       # Zustand ou Context API para carrinho
 │    │
 │    ├── auth/              # Feature de autenticação (implementado)
 │    │     ├── components/  # Componentes específicos de auth
 │    │     │    ├── AuthForm.tsx
 │    │     │    ├── InputField.tsx
 │    │     │    ├── PasswordInput.tsx
 │    │     │    └── ProtectedRoute.tsx
 │    │     ├── contexts/    # Context API para autenticação
 │    │     │    ├── AuthContext.ts
 │    │     │    ├── AuthProvider.tsx
 │    │     │    └── useAuthContext.ts
 │    │     ├── hooks/       # useAuth personalizado
 │    │     │    └── useAuth.ts
 │    │     ├── pages/       # Páginas de auth (Login, Register)
 │    │     │    ├── Login.tsx
 │    │     │    └── Register.tsx
 │    │     ├── services/    # Serviços de API (login, register…)
 │    │     │    └── authService.ts
 │    │     └── types/       # Tipos TypeScript específicos
 │    │          ├── AuthContextType.ts
 │    │          ├── AuthTypes.ts
 │    │          └── AuthUser.ts
 │    │
 │    └── checkout/          # Feature do checkout (futuro)
 │          ├── pages/
 │          └── services/
 │
 ├── hooks/                  # Hooks globais (tema, localStorage, fetch genérico…)
 │
 ├── lib/                    # Configs externas (axios, masks, formatters…)
 │    └── api.ts             # Configuração do axios
 │
 ├── pages/                  # Páginas genéricas (Home, NotFound, Dashboard)
 │    └── Dashboard.tsx      # Página principal do dashboard
 │
 ├── routes/                 # Rotas centralizadas
 │    └── Routes.tsx         # Configuração das rotas da aplicação
 │
 ├── store/                  # Zustand, Jotai, Redux (se necessário)
 │
 ├── styles/                 # Estilos organizados
 │    ├── App.css            # Estilos do componente App
 │    └── index.css          # Estilos globais
 │
 ├── utils/                  # Funções utilitárias puras
 │
 ├── App.tsx                 # Raiz da aplicação
 └── main.tsx                # Ponto de entrada do Vite
```

## Principais Melhorias na Organização

### ✅ **Contextos de Autenticação Centralizados**

- Movidos para `features/auth/contexts/`
- Seguem o padrão de domínio isolado
- Melhor encapsulamento da lógica de auth

### ✅ **Componentes de Layout Organizados**

- `components/layout/Dashboard/` para componentes específicos
- Separação clara entre UI genérico e layout específico
- Sections organizadas em subpasta

### ✅ **Feature Auth Completa**

- Todos os arquivos relacionados à autenticação em um local
- Componentes, contextos, hooks, páginas, serviços e tipos organizados
- Facilita manutenção e desenvolvimento

### ✅ **Estilos Centralizados**

- Pasta `styles/` dedicada para todos os arquivos CSS
- Separação entre estilos globais e específicos

### ✅ **Imports Atualizados**

- Todos os caminhos corrigidos para refletir a nova estrutura
- Uso consistente de `useAuthContext` em vez de `useAuth` direto
- Melhor tipagem e debugging

## Padrões de Desenvolvimento

### 🎯 **Feature-Based Architecture**

Cada feature (auth, products, cart) é autocontida com:

- Componentes específicos
- Páginas próprias
- Serviços de API
- Contextos/Estado
- Tipos TypeScript

### 🎯 **Separation of Concerns**

- **components/ui**: Reutilizáveis, genéricos
- **components/layout**: Estrutura específica
- **features/**: Lógica de domínio isolada
- **pages/**: Páginas de alto nível
- **styles/**: Apresentação centralizada

## Benefícios da Reorganização

### 📈 **Escalabilidade**

- Cada feature é independente e pode crescer sem afetar outras
- Facilita trabalho em equipe dividido por domínios
- Reduz conflitos de merge

### 🔧 **Manutenibilidade**

- Código relacionado agrupado logicamente
- Imports mais limpos e organizados
- Estrutura consistente facilita navegação

### 🎯 **Padrões Consistentes**

- Arquitetura feature-based seguindo DDD
- Separação clara de responsabilidades
- Tipagem TypeScript organizada por domínio

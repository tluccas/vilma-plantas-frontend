```
/src
 ├── assets/                 # Imagens, ícones, logos, fontes…
 │    └── images/
 │
 ├── components/             # Componentes reutilizáveis (botões, inputs, cards…)
 │    ├── ui/                # Componentes genéricos e reutilizáveis (design system)
 │    └── layout/            # Header, Footer, Navbar, Sidebar…
 │
 ├── features/               # Domínios (DDD-like) => cada área isolada
 │    ├── products/
 │    │     ├── components/  # Componentes específicos (ProductCard, ProductGrid…)
 │    │     ├── pages/       # Páginas dessa feature
 │    │     └── services/    # Lógica de API dessa feature
 │    │
 │    ├── cart/
 │    │     ├── components/
 │    │     ├── pages/
 │    │     └── store/       # Zustand ou Context API para carrinho
 │    │
 │    ├── auth/
 │    │     ├── pages/
 │    │     ├── services/    # login, register…
 │    │     └── hooks/       # useAuth, useUser
 │    │
 │    └── checkout/
 │          ├── pages/
 │          └── services/
 │
 ├── hooks/                  # Hooks globais (tema, localStorage, fetch genérico…)
 │
 ├── lib/                    # Configs externas (axios, masks, formatters…)
 │    ├── api.js
 │    ├── formatters.js
 │    └── validators.js
 │
 ├── routes/                 # Rotas centralizadas
 │    └── index.jsx
 │
 ├── store/                  # Zustand, Jotai, Redux (se necessário)
 │
 ├── styles/                 # Tailwind configs extras, estilos globais
 │    ├── globals.css
 │    └── tailwind.css
 │
 ├── utils/                  # Funções utilitárias puras
 │
 ├── pages/                  # Páginas genéricas (Home, NotFound)
 │    ├── Home.jsx
 │    └── NotFound.jsx
 │
 ├── App.jsx                 # Raiz do app
 └── main.jsx                # Entrada do Vite

```
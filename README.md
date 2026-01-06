# Vilma Plantas — Frontend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## 🔹 Descrição

**Vilma Plantas — Frontend** é a interface do usuário do e-commerce de plantas.
O projeto está sendo desenvolvido com **React** e **TailwindCSS**, seguindo uma arquitetura de componentes reutilizáveis, com foco em performance e responsividade.
Inclui integração com a API do backend, além de apresentar um design limpo, acessível e fácil de evoluir.

> [!NOTE]  
> Este é um projeto em desenvolvimento

---

## 👨‍💻 Devs

<table>
  <tr>
    <td align="center" >
      <a href="https://www.linkedin.com/in/lucasalvesz/" title="Saiba mais sobre mim">
        <img src="https://avatars.githubusercontent.com/u/138324870?v=4" width="100px;" alt="Foto do Alves no GitHub"/><br>
          <b>Lucas Alves</b><br>
      </a>
      <sub>Desenvolvedor Full-Stack</sub>
    </td>
  </tr>
</table>

---

<h2>🔗 Repositório Backend</h2>

<a href="https://github.com/tluccas/vilma-plantas-api" target="_blank" style="text-decoration: none;">
  <img src="https://img.shields.io/badge/GitHub%20Backend-24292e?style=for-the-badge&logo=github&logoColor=white" />
</a>

---

## 🔹 Funcionalidades

- **Catálogo de Produtos**: Visualização interativa de plantas com filtros e detalhes.
- **Carrinho de Compras**: Gerenciamento de itens selecionados para compra.
- **Autenticação**: Interface para login e cadastro de usuários.
- **Design Responsivo**: Layout adaptável para dispositivos móveis e desktop.
- **Performance**: Carregamento otimizado utilizando Vite.

---

## 🔹 Tecnologias utilizadas

- **React** (Biblioteca UI)
- **TypeScript** (Tipagem Estática)
- **NextJS** (Framework React)
- **TailwindCSS** (Estilização)
- **ESLint** (Linter)

---

## 📂 Estrutura do Projeto

```
vilma-plantas-frontend/
├─ app/                        # App Router do Next.js (páginas e layouts)
│    ├─ (main)/                # Grupo de rotas com Header/Footer
│    │    ├─ layout.tsx        # Layout com Header e Footer
│    │    ├─ page.tsx          # Página Home (/)
│    │    ├─ login/            # Página de Login
│    │    ├─ register/         # Página de Cadastro
│    │    └─ produtos/         # Página de Produtos
│    ├─ dashboard/             # Dashboard (sem Header/Footer)
│    │    ├─ layout.tsx        # Layout protegido
│    │    └─ page.tsx          # Página do Dashboard
│    ├─ layout.tsx             # Layout raiz (AuthProvider)
│    ├─ globals.css            # Estilos globais
│    └─ not-found.tsx          # Página 404
├─ components/                 # Componentes reutilizáveis
│    ├─ layout/                # Header, Footer, Dashboard, Home
│    ├─ products/              # Componentes de produtos
│    ├─ ui/                    # Componentes de UI (botões, inputs, auth)
│    └─ user/                  # Componentes de usuário
├─ features/                   # Funcionalidades por domínio
│    ├─ auth/                  # Autenticação (contexts, hooks, services)
│    └─ products/              # Produtos (api, types, components)
├─ hooks/                      # Custom Hooks globais
├─ lib/                        # Configurações (API client)
├─ public/                     # Arquivos estáticos
├─ types/                      # Types globais
├─ package.json                # Dependências e scripts
├─ tailwind.config.ts          # Configurações do TailwindCSS
├─ tsconfig.json               # Configurações do TypeScript
├─ next.config.ts              # Configurações do Next.js
└─ README.md
```

---

## 🤝 Como contribuir

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
5. Abra um **Pull Request**.

---

## 🗺️ Roadmap

- [x] Configuração inicial com Vite e TypeScript
- [x] Configuração do TailwindCSS
- [x] Desenvolvimento dos componentes base
- [x] Integração  com a API Backend
- [ ] Implementação do Carrinho de Compras
- [ ] Deploy da aplicação

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
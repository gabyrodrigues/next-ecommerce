![Next E-commerce](https://raw.githubusercontent.com/gabyrodrigues/next-ecommerce/main/public/img/logo.svg)
# 📝 Projeto Next E-commerce

Este projeto tem a finalidade em um mini e-commerce de produtos. A partir do Next JS é possível realizar o cadastro, busca e listagem de produtos e, a partir da ferramenta Next Auth, autenticar usuários. O projeto está disponível na [Vercel](https://next-ecommerce-two.vercel.app/) e também é possível instalá-lo localmente.

## 👩‍💻 Tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Next Auth](https://next-auth.js.org/)
- [Firebase](https://firebase.google.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Zod](https://zod.dev/)
- [Radix UI](https://www.radix-ui.com/)
- [shadcn UI](https://ui.shadcn.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

## 🖼️ Figma
Uma prototipação básica da interface da página de Produtos foi desenvolvida no [Figma](https://www.figma.com/file/Edfc2DyTrBjNWZB03OopPS/Ecommerce-Test?type=design&node-id=6%3A5&mode=design&t=twGAC0dLqXel3Q1M-1) com o objetivo de organizar a identidade visual do projeto.

## 🔧 Configurações
1. Projeto no [Firebase criado](https://console.firebase.google.com/) com as informações de configuração do projeto inseridas no arquivo `src/lib/firebase/index.ts`.
2. Ativar no Firebase os serviços: "Firebase Database", "Storage" e "Authentication" 
3. Os métodos de autenticação criados em "Authentication" precisam ser com as configurações dos provedores de `Email/senha` e também `Google`
4. As variáveis de ambiente nos arquivos .env's em cada projeto estarem preenchidos baseando-se no arquivo já criado `env.example`

#### 💠 Variáveis de Ambiente

```bash
NEXTAUTH_URL="" # Variável local para configuração da autenticação Email/senha
NEXTAUTH_SECRET="" # Variável local para configuração da autenticação Email/senha
GOOGLE_CLIENT_ID="" # Variável local para configuração da autenticação Google
GOOGLE_CLIENT_SECRET="" # Variável local para configuração da autenticação Google
```

## 💻 Inicializando o projeto

1. Para instalar o projeto localmente, além das configurações citadas acima do Firebase é necessário instalar todos os pacotes de dependências com o comando:

```bash
npm i
```

2. Gere uma build com:
   
```bash
npm run build
```

3. Suba o servidor local com:
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador para visualizar o projeto.

### 🚀 Comandos

- `dev`:  executa o projeto em `localhost:3000`
- `build`: gera uma versão build do projeto
- `start`: inicia um servidor simples com o código de compilação de produção
- `lint`: executa o linter em todos os componentes e páginas
- `test`: executa os testes em todos os componentes
- `test:watch`: executa o jest em watch mode

### 💠 Rotas do projeto
- `/`:  página inicial onde os produtos cadastrados são listados e podem ser adicionados no carrinho. Além disso, também é possível a partir do Menu superior, como não foi definido previamente, usuários não logando podem acessar todas as seguintes funções também assim como num e-commerce padrão:
  - Buscar produtos;
  - Visualizar os produtos adicionados no carrinho e controlar as quantidades;
  -  Logar/Deslogar
  -  Acessar a página de cadastrar produtos (Obrigatório login)
- `/products/new`: página de cadastro de novos produtos. É obrigatório estar logado, caso contrário, o usuário é redirecionado para a página de login.
- `/sign-in`: login de usuário:
  - Login com e-mail e senha
  - Login com Google
  - Opção de redirecionamento para esqueci senha
  - Opção de redirecionamento para cadastro de usuário
- `/sign-up`: cadastro de usuário
  - Cadastro de novo usuário a partir de e-mail, senha e recuperação de senha
  - Opção de redirecionamento para login de usuário
- `/forgot-password`: página para recuperação de senha a partir do e-mail cadastro. Desenvolvido a partir do Firebase, o e-mail, caso realmente esteja cadastrado, é enviado para a conta de e-mail inserida
  - Opção de redirecionamento para esqueci senha
  - Opção de redirecionamento para cadastro de usuário
 
## 📒 Testes

Os testes foram configurados para serem desenvolvidos utilizando o [Jest](https://jestjs.io/) para testes unitários, além do [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) para incluir testes quem envolvem renderizações.

Cada teste deve ficar inserido na própria pasta onde deve ser testado. Os componentes (`src/components`) do projeto seriam todos testados mas por questões de tempo isso ficará em versões futuras, sendo realizados apenas testes básicos iniciais. Ainda, é possível visualizar um exemplo nos components de Button, Main e Container cada um com seu arquivo `test.tsx`.

## 💡 Aprendizados

- _(Pro)_ A utilização de uma biblioteca de componentes principais reutilizáveis mas ainda customizáveis já prontos do [shadcn UI](https://ui.shadcn.com/) junto com o [Radix UI](https://www.radix-ui.com/) e a utilização de um biblioteca de classes para estilização ([Tailwind CSS](https://tailwindcss.com/)) funcionou positivamente para acelerar o desenvolvimento e facilitar a adaptação do desenvolvimento à identidade visual desenvolvida previamente.
- _(Pro)_ A utilização do Firebase para cadastro de produtos foi importante para o gerenciamento dos mesmos tanto em ambiente de testes quanto de produção, principalmente pela facilidade da criação de funções para o Firestore e Storage.
- _(Pro)_ O desenvolvimento da autenticação com e-mail e senha além de uma opção extra de login com o Google utilizando o [Next Auth](https://next-auth.js.org/) em conjunto com o [Firebase](https://firebase.google.com/) foi um aprendizado para também ser utilizado em diversos outros projetos futuros.
- _(Melhoria)_ Criação de mais testes unitários para todos os componentes além da inclusão dos testes de integração com as outras camadas do projeto.
- - _(Melhoria)_ Criação de uma página exclusiva para visualizar detalhes do produto
- _(Melhoria)_ Uma página de checkout para finalizar a compra
- _(Melhoria)_ Criação de um painel de admin separado para realmente funcionar como um e-commerce em que os produtos são cadastrados por apenas admins em outra sessão não visível para usuários comuns
- _(Melhoria)_ Mais opções de filtros na busca de produtos

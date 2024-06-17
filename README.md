# My Link Manager App 🔗

Este projeto é um aplicativo de gerenciamento de links construído com React e Firebase. Ele permite que os usuários façam login, gerenciem seus links pessoais e personalizem sua aparência. O aplicativo inclui autenticação, atualizações em tempo real no banco de dados e várias outras funcionalidades.

## Estrutura do Projeto

```sh
my-link-manager-app/
├── public/
│   ├── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Input.tsx
│   │   ├── Social.tsx
│   ├── pages/
│   │   ├── Admin.tsx
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Networks.tsx
│   ├── routes/
│   │   ├── Private.tsx
│   ├── services/
│   │   ├── firebaseConnection.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── App.ts
│   │── index.html
├── .env
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
```

## Funcionalidades
* Autenticação: Funcionalidade segura de login e logout usando Firebase Authentication.
* Gerenciamento de Links: Adicione, atualize e exclua links pessoais.
* Personalização: Personalize a cor de fundo e do texto de cada link.
* Atualizações em Tempo Real: Links são atualizados em tempo real usando Firebase Firestore.
* Design Responsivo: Layout responsivo e amigável para dispositivos móveis.

## Tecnologias Utilizadas
* React: Biblioteca de front-end para construção de interfaces de usuário.
* Firebase: Serviços de backend incluindo Authentication e Firestore.
* React Router: Para roteamento e navegação.
* Tailwind CSS: Framework de CSS utilitário para estilização.
* React Icons: Para usar ícones no aplicativo.

## Instalação
Para rodar este projeto localmente, siga estes passos:

Clone o repositório:

```bash
git clone https://github.com/ViniGusmao-png/ViniciusLinkss.git

cd ViniciusLinkss
```

Instale as dependências:

```bash
npm install
```
### Crie um arquivo <strong>.env</strong> no diretório raiz e adicione sua configuração do Firebase

```sh
VITE_FIREBASE_API_KEY=sua-api-key
VITE_FIREBASE_AUTH_DOMAIN=seu-auth-domain
VITE_FIREBASE_PROJECT_ID=seu-project-id
VITE_FIREBASE_STORAGE_BUCKET=seu-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=seu-messaging-sender-id
VITE_FIREBASE_APP_ID=seu-app-id
```

## Inicie o servidor de desenvolvimento

```bash
npm run dev
```
Abra seu navegador e vá para http://localhost:3000.


## Uso

### Página Inicial

* A página inicial exibe o título do seu projeto e uma lista de links.
* Cada link é exibido com as cores de fundo e texto personalizadas.
* Ícones de redes sociais na parte inferior linkam para seus perfis.

### Página Admin

* Acessível apenas para usuários autenticados.
* Permite aos usuários adicionar, atualizar e excluir links.
* Inclui campos de entrada para o nome do link, URL, cor de fundo e cor do texto.
* Exibe uma pré-visualização do link com as cores escolhidas.

### Página de Login

* Permite que os usuários façam login usando email e senha.
* Redireciona usuários autenticados para a página admin.

### Página de Redes Sociais

* Uma página de placeholder para futuras funcionalidades relacionadas a redes sociais.

## Componentes
* Header: Contém links de navegação e botão de logout.

* Input: Componente de input personalizado para formulários.
* Social: Componente para renderizar links de redes sociais com ícones.
* Private: Componente de ordem superior para proteger rotas.

## Configuração do Firebase
* Crie um projeto Firebase no <strong>Firebase Console</strong>.

* Habilite Firestore e Authentication (Email/Senha).
* Copie a configuração do Firebase e adicione ao seu arquivo <strong>.env</strong> conforme mostrado acima.

## Implantação

Para implantar o aplicativo, siga estes passos

* Compile o projeto:

```bash
npm run build
```

* Implemente o conteúdo da pasta dist no seu serviço de hospedagem preferido (e.g., Vercel, Netlify, Firebase Hosting).


## Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
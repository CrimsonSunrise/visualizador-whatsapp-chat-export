# Website do Parser de Chat do WhatsApp

> Aplicação de exemplo do pacote npm [whatsapp-chat-parser](https://github.com/Pustur/whatsapp-chat-parser)

Este site permite que você faça upload de um log de chat do WhatsApp e visualize seu conteúdo.
Você pode fazer upload de um `txt` diretamente ou de um arquivo `zip` contendo o chat exportado.  
Caso você exporte um arquivo `zip` com a opção `Anexar Mídia`, você poderá ver imagens, vídeos e arquivos de áudio diretamente no site. Experimente baixando o [chat de exemplo](https://github.com/Pustur/whatsapp-chat-parser-website/blob/master/src/assets/whatsapp-chat-parser-example.zip)!

<img src="https://github.com/CrimsonSunrise/visualizador-whatsapp-chat-export/blob/master/src/assets/screenshot1.png" style="max-width: 894px; width: 100%; aspect-ratio: 1/1;">

<img src="https://github.com/CrimsonSunrise/visualizador-whatsapp-chat-export/blob/master/src/assets/screenshot2.png" style="max-width: 894px; width: 100%; aspect-ratio: 1/1;">

O aplicativo roda localmente e nenhum log é enviado ou armazenado em nenhum lugar.

O site está disponível em [whatsapp-chat-parser-website-eight.vercel.app](https://whatsapp-chat-parser-website-eight.vercel.app)

## Como rodar localmente

1. Clone o repositório git
2. Instale o [Node.js](https://nodejs.org/en/) se você ainda não o tiver
3. Abra um terminal na raiz do projeto e execute `npm install` para instalar as dependências (opcionalmente com a flag `--production` para evitar a instalação de dependências de desenvolvimento)
4. Execute `npm start` para iniciar um servidor de desenvolvimento (neste modo, você pode alterar o código e ver os resultados imediatamente)
5. Execute `npm run build` para construir o pacote compilado que você encontrará na pasta `build/`

Qualquer servidor local servirá para rodar os arquivos construídos.  

## Como exportar chats do WhatsApp

-   [Android](https://faq.whatsapp.com/android/chats/how-to-save-your-chat-history)
-   [iPhone](https://faq.whatsapp.com/iphone/chats/how-to-back-up-to-icloud/)

## Tecnologias utilizadas

-   Linguagem: [TypeScript](https://www.typescriptlang.org/)
-   Bibliotecas:
    -   [React](https://reactjs.org/) (com [Jotai](https://jotai.org/))
    -   [JSZip](https://stuk.github.io/jszip/)
    -   [whatsapp-chat-parser](https://github.com/Pustur/whatsapp-chat-parser)
-   CSS: [Styled Components](https://www.styled-components.com/)
-   Formatação de código: [Prettier](https://prettier.io/)
-   Linting: [ESLint](https://eslint.org/) (com [regras do Airbnb](https://www.npmjs.com/package/eslint-config-airbnb))
-   Bundler: [Vite](https://vitejs.dev/)

## Changelog

[CHANGELOG](CHANGELOG.md)

## Licença

[MIT](LICENSE)

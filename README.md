## Telegram Web App For Bots

telegram-web-app-bot is a small npm library designed to make it easy to build a Telegram web app for bots, it provides types with custom support for React components.  

### Installation
First, install the  library in your project by running the following command: 
 
 #### Npm
`npm install telegram-web-app-for-bot --save`

#### Yarn
`yarn add telegram-web-app-for-bot `

Once you have successfully installed the package, if you are using react you can stop here.

### Usage without React
Before using the package, you have to do initializing web apps step, because package has dependency of Telegram Web App context.

Place this script in the head tag before any other scripts.
```
<script src="https://telegram.org/js/telegram-web-app.js"></script>
```

once you have done that all you need to do is import the Telegram object and you'll get typed access to all of the methods.

```md

import {Telegram} from "telegram-web-app-bot"
```
### Usage with React
If you're using React, you may utilize the library's hook. It will start the script for you and provide you with two extra helpers that will allow you to use Back Button and Main Button as react components.


```md
import { useTelegram, BackButton, MainButton } from 'bot-web-app/dist/reactjs';
```
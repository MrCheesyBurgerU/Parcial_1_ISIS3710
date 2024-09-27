import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { IntlProvider } from "react-intl";

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";

const root = ReactDOM.createRoot(document.getElementById('root'));

const language = navigator.language;
const isSpanish = language.startsWith('es');

const locale = isSpanish ? 'es-ES' : 'en-US';
const messages = isSpanish ? localeEsMessages : localeEnMessages;

root.render(
    <IntlProvider locale = {locale} messages={messages}>
        <App/>
    </IntlProvider>, document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

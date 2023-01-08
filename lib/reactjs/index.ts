import { useEffect, useState } from 'react';
import { WebApp } from '../types';

export const useTelegram = () => {
    const [lib, setLib] = useState<WebApp>();
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://telegram.org/js/telegram-web-app.js';
        document.body.appendChild(script);
        script.onload = () => setLib(window.Telegram.WebApp);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return lib as WebApp;
};
export * from './components';

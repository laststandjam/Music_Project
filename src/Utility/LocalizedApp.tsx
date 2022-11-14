import messages_en from "../Localizations/urls_en.json";
import messages_sp from "../Localizations/urls_sp.json";

import React, { useEffect, useMemo } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import App from '../App';
import { IntlProvider } from 'react-intl';
import Cookies from 'universal-cookie';

export const messages: { [index: string]: any } = {
    'en': messages_en,
    'sk': messages_sp
}

interface LocalizedAppProps{
    lang: string
}

export const LocalizedApp: React.FC<LocalizedAppProps> = ({lang}) => {
    const cookies = useMemo(() => new Cookies(document.cookie), []);

    useEffect(() => {
        cookies.set('lang', lang, { path: '/' });
    }, [lang, cookies])

    return (
        <IntlProvider
            locale={lang}
            messages={messages[lang]}
            defaultLocale={"en"}
        >
            <App/>
        </IntlProvider>
    )
}

export default LocalizedApp;
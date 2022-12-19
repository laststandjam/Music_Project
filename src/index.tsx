import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LocalizedApp from './Utility/LocalizedApp'
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies(document.cookie);
const lang = cookies.get('lang') ?? 'en';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
<BrowserRouter>
            <Routes>
                {["en", "sk"].map((value) => (
                    <Route
                        key={value}
                        path={`/${value.toLowerCase()}/*`}
                        element={<LocalizedApp lang={value} />}
                    />
                ))}
                <Route path="/" element={<Navigate to={`/${lang.toLowerCase()}`} />} />
                {["en", "sk"].map((value) => (
                    <Route
                        key={value}
                        path={`/preview${value.toLowerCase()}/*`}
                        element={<LocalizedApp lang={value} />}
                    />
                ))}
                <Route path="*" element={<Navigate to={`/${lang.toLowerCase()}/404`} />} />
            </Routes>
</BrowserRouter>

</React.StrictMode>,
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

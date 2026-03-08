import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
    const location = useLocation();
    const [locale, setLocale] = useState('global');

    useEffect(() => {
        const pathParts = location.pathname.split('/');
        const firstPart = pathParts[1];

        if (firstPart === 'in' || firstPart === 'us') {
            setLocale(firstPart);
        } else {
            setLocale('global');
        }
    }, [location.pathname]);

    const value = {
        locale,
        currency: locale === 'in' ? '₹' : '$',
        isIndia: locale === 'in',
        isUs: locale === 'us',
        isGlobal: locale === 'global'
    };

    return (
        <LocaleContext.Provider value={value}>
            {children}
        </LocaleContext.Provider>
    );
};

export const useLocale = () => useContext(LocaleContext);

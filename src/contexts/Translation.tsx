import axios from 'axios';
import translationConfig from 'config/translation';
import React, { useEffect, useState } from 'react';
// import langTranslation from '../../public/locales/en/translation.json'

const TranslationContext = React.createContext({
    t: {},
    setTranslation: (o: Object) => { },
    changeLocale: (locale: String) => { }
});

interface IThemeContextProvider {
    resources?: Array<String>,
    children: React.ReactElement
}

export const TranslationContextProvider = ({
    resources,
    children
}: IThemeContextProvider) => {
    const [translation, setTranslation] = useState({});
    const [locales, setLocales] = useState({});
    
    getTranslationFiles(['translation', ...(resources ?? [])], setTranslation);
    const changeLocale = (locale: String) => {

    }

    return (
        <TranslationContext.Provider
            value={{ t: translation, setTranslation, changeLocale }}
        >
            {children}
        </TranslationContext.Provider>
    )
}


async function getTranslationFiles(resources: Array<String>, setTranslation: React.Dispatch<React.SetStateAction<{}>>) {
    const newResources = resources.reduce(async (current: any, fileName: any) => {
        const data = await axios.get(`${translationConfig.ROOT_PATH}/${fileName}.json`);
        current[fileName] = data;
        return current;
    }, Promise.resolve([] as Array<String>));

    // setTranslation(newResources);
}


export default TranslationContext
import { createContext, useReducer } from "react";

const ThemeContext = createContext();
const lightTheme = 'light';
const darkTheme = 'dark';

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            localStorage.setItem('theme', state.theme === 'dark' ? lightTheme : darkTheme);
            return {
                theme: state.theme === 'dark' ? lightTheme : darkTheme,
            };
        default:
            return state;
    }
};

const ThemeContextProvider = ({ children }) => {
    const getInitialTheme = () => {
        const theme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (theme) {
            return theme;
        }
        if (prefersDark) {
            return darkTheme;
        }
        return lightTheme;
    };

    const initialState = {
        theme: getInitialTheme(),
    };

    const [state, dispatch] = useReducer(themeReducer, initialState);

    const value = {
        theme: state.theme,
        toggleTheme: () => dispatch({
            type: 'TOGGLE_THEME'
        }),
    }

    return (
        <ThemeContext.Provider value={ value }>
            { children }
        </ThemeContext.Provider>
    );

}

export { ThemeContextProvider };
export default ThemeContext;
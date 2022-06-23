import ReactDOM from "react-dom";
import App from './App';
import './index.css';
import { ThemeContextProvider } from './context/ThemeContext';

ReactDOM.render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>,
    document.querySelector('#root')
);
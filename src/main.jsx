import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {HashRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <HashRouter basename="/Kasa-Openclassrooms-Projet-11">
    <App />
    </HashRouter>
)

import { createRoot } from 'react-dom/client'; //puts our react app inside the #root div of index.html
import { BrowserRouter } from 'react-router-dom'; //BrowserRouter = lets us have different pages (/about , /programs ...)
import App from './App.jsx';
import '@fontsource/mea-culpa/400.css'; //signature font : Mea Culpa (installed with npm , works offline)
import './App.css';

createRoot(document.getElementById('root')).render(<BrowserRouter><App /></BrowserRouter>);

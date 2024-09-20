import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import axios from 'axios';

axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? ''
    : 'http://localhost:8080/api'
});

createRoot(document.getElementById('root')!).render(
  <App />
)

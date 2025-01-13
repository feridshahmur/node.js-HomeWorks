
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import BasketProvider from './context/BasketProvider.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <BasketProvider>
      <App />
    </BasketProvider>
  </BrowserRouter>

  ,
)

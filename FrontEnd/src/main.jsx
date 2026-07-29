
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import AuthContextProvider from './Features/Auth/Context/AuthContext.jsx'
import SplitContextProvider from './Features/Setup Split/Context/SplitContext.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<AuthContextProvider>
  <SplitContextProvider>
    <App/>
  </SplitContextProvider>
</AuthContextProvider>
</BrowserRouter>
)

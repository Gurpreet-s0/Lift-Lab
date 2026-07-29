
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import AuthContextProvider from './Features/Auth/Context/AuthContext.jsx'
import SplitContextProvider from './Features/Setup Split/Context/SplitContext.jsx'
import TodaySplitContextProvider from './Features/DashBoard/Context/TodaySplitContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider>
      <SplitContextProvider>
        <TodaySplitContextProvider>
          <App />
        </TodaySplitContextProvider>
      </SplitContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
)

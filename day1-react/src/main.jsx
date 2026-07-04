
import { createRoot } from 'react-dom/client'
// import './index.css'
import Button from './assets/Button.jsx'
import App from './App.jsx'

let order = "Order Placed";
createRoot(document.getElementById('root')).render(
  <div>
    <Button placeHolder={order} />
    <App />
  </div>

)

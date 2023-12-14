import { render } from 'react-dom'
import ReactDOM from 'react-dom/client'
import App from './App'

const isLegacy = localStorage.getItem('render-mode') === 'legacy'

if (isLegacy) {
  render(<App />, document.getElementById('root')! as HTMLElement)
} else {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  root.render(<App />)
}

import React from 'react'
import ReactDOM from 'react-dom'
import { Main } from '@tecommons/ui'
import App from './App'

ReactDOM.render(
  <Main theme="dark" assetsUrl="./aragon-ui/" layout={false} scrollView={false}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Main>,
  document.getElementById('root')
)

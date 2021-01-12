import React from 'react'
import ReactDOM from 'react-dom'
import { Main } from '@1hive/tecommons-ui'
import App from './App'

ReactDOM.render(
  <Main assetsUrl="./aragon-ui/" layout={false} scrollView={false}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Main>,
  document.getElementById('root')
)

import React from 'react'
import { WalletProvider } from './providers/Wallet'
import { ConnectProvider as Connect } from './providers/Connect'

import MainView from './components/MainView'

import './assets/global.css'
import { AppStateProvider } from './providers/AppState'
import PresaleView from './views/PresaleView'

export default () => {
  // test
  return (
    <WalletProvider>
      <Connect>
        <AppStateProvider>
          <MainView>
            <PresaleView />
          </MainView>
        </AppStateProvider>
      </Connect>
    </WalletProvider>
  )
}

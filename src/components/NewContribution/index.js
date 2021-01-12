import React, { useContext } from 'react'
import { SidePanel } from '@1hive/tecommons-ui'
import { PresaleViewContext } from '../../context'
import Contribution from './Contribution'

export default () => {
  // *****************************
  // context state
  // *****************************
  const { presalePanel, setPresalePanel } = useContext(PresaleViewContext)

  return (
    <SidePanel
      title="New Contribution"
      opened={presalePanel}
      onClose={() => setPresalePanel(false)}
    >
      <Contribution />
    </SidePanel>
  )
}

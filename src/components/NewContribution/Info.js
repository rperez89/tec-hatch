import React from 'react'
import { Info, GU } from '@1hive/tecommons-ui'

const Information = () => {
  return (
    <div
      css={`
        margin-top: ${4 * GU}px;
      `}
    >
      <Info.Action>
        If the hatch campaign fails, you can get refunded. If the hatch campaign
        succeeds, your shares will be vested.
      </Info.Action>
    </div>
  )
}

export default Information

import React from 'react'
import PropTypes from 'prop-types'
import {
  EthIdenticon,
  GU,
  RADIUS,
  shortenAddress,
  textStyle,
  useTheme,
} from '@1hive/tecommons-ui'

import HeaderModule from '../Header/HeaderModule'
import { useWallet } from '../../providers/Wallet'

const AccountButton = ({ onClick }) => {
  const { account } = useWallet()
  const theme = useTheme()

  return (
    <HeaderModule
      icon={
        <div css="position: relative">
          <EthIdenticon address={account} radius={RADIUS} />
          <div
            css={`
              position: absolute;
              bottom: -3px;
              right: -3px;
              width: 10px;
              height: 10px;
              background: ${theme.positive};
              border: 2px solid ${theme.surface};
              border-radius: 50%;
            `}
          />
        </div>
      }
      content={
        <>
          <div
            css={`
              margin-bottom: -5px;
              ${textStyle('body2')}
            `}
          >
            <div
              css={`
                overflow: hidden;
                max-width: ${16 * GU}px;
                text-overflow: ellipsis;
                white-space: nowrap;
              `}
            >
              {shortenAddress(account)}
            </div>
          </div>
          <div
            css={`
              font-size: 11px; /* doesn’t exist in aragonUI */
              color: ${theme.green};
            `}
          >
            Connected
          </div>
        </>
      }
      onClick={onClick}
    />
  )
}

AccountButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default AccountButton

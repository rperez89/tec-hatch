import { useCallback } from 'react'
import { useToast } from '@1hive/tecommons-ui'
import { writeText as copy } from 'clipboard-polyfill'

export const useCopyToClipboard = () => {
  const toast = useToast()
  return useCallback(
    (text, confirmationMessage = 'Copied') => {
      copy(text)
      if (confirmationMessage) {
        toast(confirmationMessage)
      }
    },
    [toast]
  )
}

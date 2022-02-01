import { Text, TextProps } from '@chakra-ui/react'
import * as React from 'react'
import { useTranslation } from "react-i18next";
export const Copyright = (props: TextProps) => {
  const { t } = useTranslation()
  return (
    <Text fontSize="md" {...props}>
      &copy; {new Date().getFullYear()} {t('Made with ⚡️ by')} Fernando Belotto
    </Text>
  )
}
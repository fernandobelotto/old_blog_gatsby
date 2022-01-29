import { Text, TextProps } from '@chakra-ui/react'
import * as React from 'react'

export const Copyright = (props: TextProps) => (
  <Text fontSize="md" {...props}>
    &copy; {new Date().getFullYear()} Made with ⚡️ by Fernando Belotto
  </Text>
)
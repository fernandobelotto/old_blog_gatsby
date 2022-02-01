import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton as="a" href="mailto:fernando.bbosco@gmail.com" aria-label="Email" icon={<HiOutlineMail fontSize="20px" />} />
    <IconButton as="a" href="https://www.linkedin.com/in/fernandobelotto/" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} />
    <IconButton as="a" href="https://github.com/fernandobelotto" aria-label="Github" icon={<FaGithub fontSize="20px" />} />
  </ButtonGroup>
)

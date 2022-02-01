import { Button, Flex, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup, Text } from '@chakra-ui/react'
import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import i18n from '../i18n'

export default function LanguageToggle() {

    const [language, setLanguage] = React.useState<string>('br')

    React.useEffect(() => {
        i18n.changeLanguage(language)
    }, [language])

    const languages = [{ code: 'us', language: 'english' }, { code: 'br', language: 'portuguese' }, { code: 'es', language: 'spanish' }]

    return (
        <>
            <Menu >
                <MenuButton as={Button} size='sm' aria-label='country' fontSize={'20px'}>
                    <Text>
                        <ReactCountryFlag countryCode={language.toUpperCase()} svg />
                    </Text>
                </MenuButton>
                <MenuList minW={'full'} >
                    <MenuOptionGroup value={language} onChange={(value) => { setLanguage(value as string) }} type='radio'>
                        {languages.map((language) => {
                            return (
                                <MenuItemOption value={language.code} >
                                    <Flex flexDir='row' alignItems={'center'} justifyContent={'space-between'}>

                                        <Text mr='2'>{language.language}</Text>
                                        <ReactCountryFlag countryCode={language.code.toUpperCase()} svg />
                                    </Flex>
                                </MenuItemOption>
                            )
                        })}
                    </MenuOptionGroup>
                </MenuList>
            </Menu>
        </>
    )
}
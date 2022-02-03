import { EmailIcon } from '@chakra-ui/icons';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftElement, Textarea, toast, useColorModeValue, useToast, VStack } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { BsPerson } from 'react-icons/bs';
import axios from 'axios'

export function ContactForm() {
    const { t } = useTranslation()

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    const toast = useToast()

    async function onSubmit(values) {
        try {
            const res = await axios.post('http://localhost:8888', values)
            toast({ title: 'message sent', status: 'success' })
        } catch (e) {
            toast({ title: 'error to sent', status: 'error', description: 'please, send me a message over any of my social accounts' })
        }

    }

    return <>





        <Box
            bg={'transparent'}
            borderRadius="lg"
            p={8}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.300', 'gray.500')}
            color={useColorModeValue('gray.700', 'whiteAlpha.900')}
            shadow="base"
            width={['100%', '100%', '60%',]}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <VStack spacing={5}>




                    <FormControl isInvalid={errors.name}>
                        <FormLabel htmlFor='name'>{t('Name')}</FormLabel>
                        <InputGroup>
                            <InputLeftElement children={<BsPerson />} />
                            <Input
                                colorScheme={'gray'}
                                type="text"
                                name="name"
                                placeholder={t("Your Name")}
                                {...register('name', {
                                    required: 'This is required',
                                    minLength: { value: 4, message: 'Minimum length should be 4' },
                                })}
                            />
                        </InputGroup>
                        <FormErrorMessage>
                            {errors.name && errors.name.message}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.name}>
                        <FormLabel htmlFor='name'>{t('Name')}</FormLabel>
                        <InputGroup>
                            <InputLeftElement children={<EmailIcon />} />
                            <Input type="email" name="email" placeholder={t('Your Email')}

                                {...register('email', {
                                    required: 'This is required',
                                })}
                            ></Input>
                        </InputGroup>
                        <FormErrorMessage>
                            {errors.name && errors.name.message}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.name}>
                        <FormLabel>{t('Message')}</FormLabel>
                        <Textarea
                            name="message"
                            placeholder={t('Your Message')}
                            rows={6}
                            resize="none"
                            {...register('message', {
                                required: 'This is required',
                                minLength: 10
                            })}
                        />
                        <FormErrorMessage>
                            {errors.name && errors.name.message}
                        </FormErrorMessage>
                    </FormControl>

                    <Button mt={4}
                        colorScheme='teal'
                        isLoading={isSubmitting}
                        type='submit'
                        isFullWidth>
                        {t('Send Message')}
                    </Button>
                </VStack>
            </form>
        </Box>
    </>;
}


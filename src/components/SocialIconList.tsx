import React from 'react'
import {
    FaGithub,
    FaLinkedin, FaStackOverflow, FaWhatsapp
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HStack, Icon as GatsbyIcon } from '@chakra-ui/react'
import { Tooltip } from 'react-tippy';
import { SiCodepen, SiCodesandbox, SiDevdotto, SiMedium, SiTelegram } from 'react-icons/si';

function IconLink({ Icon, href, target, aria }: any) {
    return (
        <>
            <Tooltip
                title={aria}
                position="bottom"
            >

                <a href={href} target={target ? target : `_blank`} rel="noopener" aria-label={aria}>
                    <GatsbyIcon
                        // p={10}
                        as={Icon}
                        fontSize={'4xl'}
                        _hover={{
                            transform: 'scale(1.20)'
                        }}
                        transition="all 0.25s"
                        transition-timing-function="spring(1 100 10 10)"
                    />
                </a>
            </Tooltip>

        </>

    );
}



export function SocialIconList() {
    return (
        <><HStack spacing={5} mt='5'>

            {/* <div className="mt-4 list-disc flex flex-row space-x-2"> */}
            <IconLink aria='Email' href="mailto:fernando.bbosco@gmail.com" Icon={HiOutlineMail} />
            <IconLink aria='WhatApp' href="https://wa.me/5519997773727" Icon={FaWhatsapp} />
            <IconLink aria='Telegram' href="https://t.me/fernandobelotto" Icon={SiTelegram} />
            <IconLink aria='LinkedIn' href="https://www.linkedin.com/in/fernandobelotto/" Icon={FaLinkedin} />
            <IconLink aria='Github' href="https://github.com/fernandobelotto" Icon={FaGithub} />
            <IconLink aria='StackOverflow' href="https://stackoverflow.com/users/9844118/fernando-bosco" Icon={FaStackOverflow} />
            <IconLink aria='Codepen' href="https://codepen.io/fernandobelotto" Icon={SiCodepen} />
            <IconLink aria='Codesandbox' href="https://codesandbox.io/u/fernandobelotto" Icon={SiCodesandbox} />
            <IconLink aria='Dev.to' href="https://dev.to/fernandobelotto" Icon={SiDevdotto} />
            <IconLink aria='Medium' href="https://medium.com/@fernandobelotto" Icon={SiMedium} />
        </HStack>
        </>
    );
}

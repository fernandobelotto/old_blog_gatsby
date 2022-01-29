import {
    SiAmazonaws,
    SiAngular,
    SiAntdesign,
    SiChakraui,
    SiGatsby,
    SiGo,
    SiJava,
    SiNestjs,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiRedux,
    SiTailwindcss,
    SiTypescript, SiVuedotjs
} from "react-icons/si";
import {
    Tooltip,
} from 'react-tippy';
import { Flex, Icon as ChakraIcon, Link, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export function TechIcon({ Icon, name, link }: any) {
    return (
        <Tooltip
            title={name}
            position="bottom"
        >

            <a href={link} target='_blank'>

                <ChakraIcon
                    href={link}
                    color='gray.500'
                    as={Icon}
                    p='3'
                    fontSize={'6xl'} _hover={{ transform: 'scale(1.25)', color: useColorModeValue('black', 'white') }}
                    transition="all 0.25s"
                    transition-timing-function="spring(1 100 10 10)"
                />
            </a>


        </Tooltip>
    );
}

export function TechList({ ...props }) {
    return (
        <Flex flexDir='row' alignItems={'end'} justifyContent={'start'} {...props}>
            <TechIcon Icon={SiNextdotjs} name="Next.js" link='https://nextjs.org' />
            <TechIcon Icon={SiGatsby} name="Gatsby" link='https://www.gatsbyjs.com/docs' />
            <TechIcon Icon={SiReact} name="React" link='https://www.reactjs.org' />
            <TechIcon Icon={SiRedux} name="Redux" link='https://redux.js.org/' />
            <TechIcon Icon={SiVuedotjs} name="Vue.js" link='https://vuejs.org/' />
            <TechIcon Icon={SiAngular} name="Angular" link='https://angular.io/' />
            <TechIcon Icon={SiTypescript} name="Typescript" link='https://www.typescriptlang.org/' />
            <TechIcon Icon={SiTailwindcss} name="Tailwindcss" link='https://tailwindcss.com/' />
            <TechIcon Icon={SiChakraui} name="Chakraui" link='https://chakra-ui.com/' />
            <TechIcon Icon={SiAntdesign} name="Antdesign" link='https://ant.design/' />
            <TechIcon Icon={SiAmazonaws} name="AWS" link='https://aws.amazon.com/' />
            <TechIcon Icon={SiNodedotjs} name="Node.js" link='https://nodejs.org/en/' />
            <TechIcon Icon={SiJava} name="Java" link='https://www.oracle.com/java/' />
            <TechIcon Icon={SiGo} name="Go" link='https://go.dev/' />
            <TechIcon Icon={SiNestjs} name="NestJs" link='https://nestjs.com/' />
        </Flex>

    );
}

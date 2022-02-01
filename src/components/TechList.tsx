import {
    SiAmazonaws,
    SiAngular,
    SiAntdesign,
    SiChakraui,
    SiFirebase,
    SiGatsby,
    SiGo,
    SiJava,
    SiJest,
    SiMongodb,
    SiNestjs,
    SiNextdotjs,
    SiNodedotjs,
    SiNpm,
    SiPostgresql,
    SiPwa,
    SiQuarkus,
    SiReact,
    SiRedis,
    SiRedux,
    SiSpringboot,
    SiSwift,
    SiTailwindcss,
    SiTypescript, SiVercel, SiVuedotjs
} from "react-icons/si";
import { Container, Flex, Icon as ChakraIcon, Link, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export function TechIcon({ Icon, name, link }: any) {
    return (

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

    );
}

export function TechList({ ...props }) {
    return (
        <Container>
            <Flex wrap={'wrap'} flexDir='row' alignItems={'end'} justifyContent={'start'} {...props}>
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
                <TechIcon Icon={SiQuarkus} name="Quarkus" link='' />
                <TechIcon Icon={SiSpringboot} name="Spring" link='' />
                <TechIcon Icon={SiVercel} name="Vercel" link='https://vercel.com/' />
                <TechIcon Icon={SiNpm} name="Npm" link='https://www.npmjs.com/' />
                <TechIcon Icon={SiFirebase} name="Firebase" link='https://firebase.io/' />
                <TechIcon Icon={SiJest} name="Jest" link='https://jestjs.io/' />
                <TechIcon Icon={SiPwa} name="PWA's" link='https://web.dev/progressive-web-apps/' />
                <TechIcon Icon={SiSwift} name="PWA's" link='https://www.swift.org/' />
                <TechIcon Icon={SiPostgresql} name="Postgres" link='' />
                <TechIcon Icon={SiMongodb} name="PWA's" link='' />
                <TechIcon Icon={SiRedis} name="PWA's" link='' />
            </Flex>
        </Container>
    );
}

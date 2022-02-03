import * as React from 'react'
import { Footer } from '../components/Footer/Footer'
import NavBar from '../components/NavBar'
import CommandBar from '../components/CommandBar';
export default ({ children, pageContext }) => {

    return (
        <>

            <NavBar />
            {children}
            <Footer />

        </>
    )
}

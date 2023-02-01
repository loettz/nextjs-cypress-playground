import {
    Container,
    Link,
} from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import HeadComponent from "@/components/HeadComponent";
import HeaderMenuBar from "@/components/HeaderMenuBar";
export default function Cypress() {
    return (
        <>
            <HeadComponent />
            <HeaderMenuBar />
            <main>
                <Container maxWidth="sm" style={{fontFamily: 'Roboto'}}>
                    <h1>Cypress</h1>
                    <p style={{fontSize: '20px'}}>
                        This Project uses <Link href="https://www.cypress.io/" target="_blank">Cypress</Link>
                        <br/><br/>
                        Cypress is used to built tests for web applications
                        <br/><br/>
                    </p>
                </Container>
            </main>
        </>
    )
}

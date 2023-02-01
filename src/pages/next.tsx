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


export default function Next() {
    return (
        <>
            <HeadComponent />
            <HeaderMenuBar />
            <main>
                <Container maxWidth="sm" style={{fontFamily: 'Roboto'}}>
                    <h1>Next.JS</h1>
                    <p style={{fontSize: '20px'}}>
                        This Project is built with Next.JS (Create Next App).
                        <br/><br/>
                        Next.Js is a React Framework.
                        <br/><br/>
                        React is a Javascript library to built user interfaces.
                        <br/><br/>
                        <Link
                            href="https://nextjs.org/docs/api-reference/create-next-app"
                            target="_blank">Create Next App
                        </Link> is a Tool for the command line to helps you to create a new
                        Project interactively.
                    </p>
                </Container>
            </main>
        </>
    )
}

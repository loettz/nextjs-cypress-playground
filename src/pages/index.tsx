import {
    Container,
} from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import HeadComponent from "@/components/HeadComponent";
import HeaderMenuBar from "@/components/HeaderMenuBar";


export default function Home() {
  return (
    <>
        <HeadComponent />
        <HeaderMenuBar />
      <main>
      <Container maxWidth="sm" style={{fontFamily: 'Roboto'}}>
       <h1>Welcome to my Next.JS - Cypress - Playground</h1>
        <p style={{fontSize: '20px'}}>This project is to try out different things with Next.Js and Cypress (Cloud)
        + CI/CD with GitHub</p>
      </Container>
      </main>
    </>
  )
}

import Link from 'next/link'
import {Box, Container, Link as MUILink, Toolbar} from "@mui/material";
export default function HeaderMenuBar() {
    const navItems = [
        {name: 'START', href: '/'},
        {name: 'NEXT.JS', href: '/next'},
        {name: 'CYPRESS', href: '/cypress'}]

    return (
        <header>
            <Toolbar component="nav">
                <Container maxWidth="sm">
                    {navItems.map((item) => (
                        <Box key={item.name} display="inline" paddingRight="16px">
                            <Link href={item.href} passHref>
                                <MUILink component="button" variant="subtitle1">{item.name}</MUILink>
                            </Link>
                        </Box>
                    ))}
                </Container>
            </Toolbar>
        </header>
    )
}

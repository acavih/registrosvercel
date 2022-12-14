import { Button, Container, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { HeadFC, Link } from 'gatsby'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { logout } from '../../store/features/AuthSlice'
import '../../styles.css'

export const GuestLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const userToken = useSelector((state: RootState) => state.auth.token)
    const dispatch = useDispatch()

    const isLogged = userToken !== ''

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Página de acceso
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container sx={{ marginTop: '20px' }}>
                {isLogged
                    ? (
                        <>
                            <Button variant="contained" LinkComponent={Link} to="/admin/users">Ir al area interna</Button>
                        </>
                    )
                    : children}
            </Container>
        </>
    )
}

export const Head: HeadFC = () => <title>Home Page</title>

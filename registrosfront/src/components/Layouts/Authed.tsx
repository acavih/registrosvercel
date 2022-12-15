import TokenService from '@around25/jwt-utils'
import { AppBar, Button, Drawer, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { Link } from 'gatsby'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { logout } from '../../store/features/AuthSlice'

const drawerWidth = 250

export const AuthedLayout: React.FC<React.PropsWithChildren<any>> = (props) => {
    const tokenService = new TokenService({
        storageSystem: window.localStorage
    })
    const userToken = useSelector((state: RootState) => state.auth.token)
    const dispatch = useDispatch()

    const isLogged = userToken !== ''

    if (isLogged && tokenService.isExpired(userToken)) {
        dispatch(logout())
    }

    return (
        <>
            <AppBar sx={(theme) => ({ zIndex: theme.zIndex.drawer + 1 })} position="fixed">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {isLogged ? 'Area privada' : 'Necesita volver a idenficarse'}
                    </Typography>
                    {isLogged && <Button disableElevation color='error' onClick={() => dispatch(logout())} sx={{ marginLeft: '10px' }} variant="contained">Logout</Button>}
                </Toolbar>
            </AppBar>
            {isLogged && <Drawer open={true} variant="persistent">
                <Toolbar />
                <List>
                    <ListItem sx={{ width: drawerWidth }} component={Link} to="/">
                        <ListItemText>Primer item de lista</ListItemText>
                    </ListItem>
                </List>
            </Drawer>}
            <Container sx={{ marginLeft: isLogged ? (drawerWidth + 1) + 'px' : 0, marginTop: 10 }}>
                {isLogged ? props.children : <Button variant="contained" color="error" LinkComponent={Link} to="/">Volver a identificarse</Button>}
            </Container>
        </>
    )
}

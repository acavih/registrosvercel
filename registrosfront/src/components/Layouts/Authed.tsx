import TokenService from '@around25/jwt-utils'
import { AppBar, Button, Drawer, Toolbar, Typography } from '@mui/material'
import { Link } from 'gatsby'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { logout } from '../../store/features/AuthSlice'
import { http } from '../../utils/http'
import UserButton from './components/UserButton'
import Navigation from './components/Navigation'

const drawerWidth = 250

export const AuthedLayout: React.FC<React.PropsWithChildren<any>> = (props) => {
    const tokenService = new TokenService({
        storageSystem: window.localStorage
    })
    const userToken = useSelector((state: RootState) => state.auth.token)
    const dispatch = useDispatch()

    const isLogged = userToken !== ''

    if (!isLogged && tokenService.isExpired(userToken)) {
        dispatch(logout())
    } else {
        http.defaults.headers.common.authorization = userToken
    }

    const links = [
        { text: 'Usuarios*', to: '/admin/users' },
        { text: 'Socios*', to: '/admin/partners' },
        { text: 'Atenciones*', to: '/admin/attentions' },
        { text: 'Recursos*', to: '/admin/resources' },
        { text: 'Estadísticas*', to: '/admin/stats' }
    ]

    return (
        <>
            <AppBar sx={(theme) => ({ zIndex: theme.zIndex.drawer + 1 })} position="fixed">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {isLogged ? 'Area privada' : 'Necesita volver a idenficarse'}
                    </Typography>
                    {isLogged && <UserButton />}
                </Toolbar>
            </AppBar>
            {isLogged && <Drawer open={true} variant="persistent">
                <Toolbar />
                <Navigation drawerWidth={drawerWidth} />
            </Drawer>}
            <div style={{ padding: 20, marginLeft: isLogged ? (drawerWidth + 1) + 'px' : 0, marginTop: 10 }}>
                <Toolbar />
                {isLogged ? props.children : <Button variant="contained" color="error" LinkComponent={Link} to="/">Volver a identificarse</Button>}
            </div>
        </>
    )
}

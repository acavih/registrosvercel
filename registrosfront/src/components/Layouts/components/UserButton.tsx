import { Button, Card, CardActions, CardHeader, Popover } from '@mui/material'
import { Container } from '@mui/system'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { logout } from '../../../store/features/AuthSlice'

export default function UserButton () {
    const dispatch = useDispatch()
    const userInfo = useSelector((state: RootState) => state.auth.userInfo)

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined

    return (
        <>
            <Button aria-describedby={id} onClick={handleClick} variant='contained' color='secondary' disableElevation>
                {userInfo.user}
            </Button>
            <Popover id={id} onClose={handleClose} anchorEl={anchorEl} open={open} anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}>
                <Card elevation={0}>
                    <CardHeader title="Menu de usuario" />
                    <CardActions>
                        <Button variant="contained" onClick={() => dispatch(logout())} disableElevation color='error'>Cerrar sesión</Button>
                    </CardActions>
                </Card>
            </Popover>
        </>
    )
}

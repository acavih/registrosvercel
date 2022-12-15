import { List, ListItem, ListItemText, SxProps } from '@mui/material'
import * as React from 'react'
import { Link } from 'gatsby'
import { theme } from '../../../utils/theme'
import { grey } from '@mui/material/colors'

export default function Navigation ({ drawerWidth }: {drawerWidth: number}) {
    const listItemStyle: SxProps<typeof theme> = () => ({
        color: 'initial',
        width: drawerWidth,
        background: '#fff',
        transition: 'all .3s',
        '&[aria-current=page]': {
            background: grey[200]
        },
        '&:hover': {
            background: grey[300]
        }
    })

    const links = [
        { text: 'Usuarios*', to: '/admin/users' },
        { text: 'Socios*', to: '/admin/partners' },
        { text: 'Atenciones*', to: '/admin/attentions' },
        { text: 'Recursos*', to: '/admin/resources' },
        { text: 'Estadísticas*', to: '/admin/stats' }
    ]

    return (
        <List>
            {links.map((link) =>
                <ListItem sx={listItemStyle} key={link.text} component={Link} to={link.to}>
                    <ListItemText>{link.text}</ListItemText>
                </ListItem>
            )}
        </List>
    )
}

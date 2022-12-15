import Box from '@mui/material/Box'
import * as React from 'react'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}

export const ModalContent: React.FC<React.PropsWithChildren<any>> = ({ children }) => {
    return (
        <Box sx={style}>
            {children}
        </Box>
    )
}

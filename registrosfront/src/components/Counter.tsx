import { Button, Container, Typography } from '@mui/material'
import type { HeadFC } from 'gatsby'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux/es/exports'
import { RootState } from '../store'
import { decrement, increment } from '../store/features/CounterSlice'

export default function Counter () {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <Container>
            <Typography>{count}</Typography>
            <div>
                <Button onClick={() => dispatch(increment())}>Incrementar</Button>
                <Button onClick={() => dispatch(decrement())}>Decrementar</Button>
            </div>
        </Container>
    )
}

export const Head: HeadFC = () => <title>Home Page</title>

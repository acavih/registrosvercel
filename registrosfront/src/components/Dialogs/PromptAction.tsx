import { Button, Card, CardActions, CardContent, CardHeader, Modal, TextField } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'
import { ModalContent } from '../ModalContent'
import { Activator } from './Activator'

type Props = {
    ActivatorElement: (props: any) => React.ReactElement;
    onSubmit: (response: string) => any;
    promptQuestion: string;
    initialValue?: string;
};

export const PromptAction: React.FC<Props> = ({
    ActivatorElement,
    promptQuestion,
    initialValue = '',
    onSubmit = () => { }
}: Props) => {
    const [message, setMessage] = useState(initialValue)

    return (
        <>
            <Activator ActivatorElement={ActivatorElement}>
                {({ state, onClose }) => {
                    const handleSubmit = async (e: any) => {
                        e.preventDefault()
                        await onSubmit(message)
                        onClose()
                    }
                    return (
                        <Modal open={state} onClose={onClose}>
                            <ModalContent>
                                <Card component="form" onSubmit={handleSubmit} sx={{ minWidth: 720 }}>
                                    <CardHeader title="Rellene el dato" />
                                    <CardContent>
                                        <TextField
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            fullWidth
                                            label={promptQuestion}
                                        />
                                    </CardContent>
                                    <CardActions>
                                        <Button type="submit" variant="contained" disableElevation>
                                    Proceder
                                        </Button>
                                    </CardActions>
                                </Card>
                            </ModalContent>
                        </Modal>
                    )
                }}
            </Activator>
        </>
    )
}

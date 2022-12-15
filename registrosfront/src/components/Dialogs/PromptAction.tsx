import { Button, Card, CardActions, CardContent, CardHeader, Modal, TextField } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'
import { ModalContent } from '../ModalContent'

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
    const [activeModal, setActiveModal] = useState(false)

    const openModal = () => {
        setActiveModal(true)
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        await onSubmit(message)
        setActiveModal(false)
    }

    return (
        <>
            <ActivatorElement onClick={openModal} />
            <Modal open={activeModal} onClose={() => setActiveModal(false)}>
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
        </>
    )
}

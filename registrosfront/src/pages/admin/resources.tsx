import { Button, Card, CardContent, Grid, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PromptAction } from '../../components/Dialogs/PromptAction'
import { AuthedLayout } from '../../components/Layouts/Authed'
import useResources from '../../hooks/resources'
import { RootState } from '../../store'
import { setActiveResource } from '../../store/features/ResourcesSlice'

export default function ResourcesPage () {
    const dispatch = useDispatch()
    const { resources, activeResources, resourcesLoaded, resourceTypes } = useResources()
    const { activeResource } = useSelector((s: RootState) => s.resources)

    if (!resourcesLoaded) {
        return (
            <p>...</p>
        )
    }

    return (
        <AuthedLayout>
            <Grid container spacing={2}>
                <Grid item lg={9}>
                    <Card>
                        <CardContent>
                            <Toolbar>
                                <Typography variant={'h5'} component="h2">
                    Listado de recursos {activeResource}
                                </Typography>
                            </Toolbar>
                            <List>
                                {activeResources.map((r: any) => (
                                    <ListItem
                                        key={r.id}
                                        secondaryAction={
                                            <PromptAction
                                                ActivatorElement={(props) => (<Button {...props}>Hola mundo</Button>)}
                                                onSubmit={(response) => {
                                                    console.log('LA RESPUESTA ES: ' + response)
                                                }}
                                                promptQuestion="Indique un nuevo nombre para el recurso"
                                                initialValue={r.name}
                                            />
                                        }
                                    >
                                        <ListItemText primary={r.name} secondary={r.type} />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={3}>
                    <Card>
                        <CardContent>
                            <Toolbar>
                                <Typography variant={'h5'} component="h2">
                    Listado de recursos
                                </Typography>
                            </Toolbar>
                            <List>
                                {resourceTypes.map((r: any) => (
                                    <ListItem selected={activeResource === r} key={r}>
                                        <ListItemButton
                                            onClick={() => dispatch(setActiveResource(r))}
                                        >
                                            <ListItemText primary={r} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </AuthedLayout>
    )
}

import * as React from 'react'

type Props = {
    ActivatorElement: (props: any) => React.ReactElement;
    children: (props: {state: boolean, onClose: () => any}) => React.ReactElement
};

export const Activator: React.FC<Props> = ({
    ActivatorElement,
    children
}) => {
    const [active, setActive] = React.useState(false)
    return (
        <>
            <ActivatorElement onClick={() => setActive(true)} />
            {children({ state: active, onClose: () => setActive(false) })}
        </>
    )
}

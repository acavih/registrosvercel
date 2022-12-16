import * as React from 'react'

type Props = {
    ActivatorElement: (props: any) => React.ReactElement;
    Content: (props: {onClose: () => any, state: boolean}) => React.ReactElement;
};

export const Activator: React.FC<Props> = ({
    ActivatorElement,
    Content
}) => {
    const [active, setActive] = React.useState(false)
    return (
        <>
            <ActivatorElement onClick={() => setActive(true)} />
            <Content state={active} onClose={() => setActive(false)} />
        </>
    )
}

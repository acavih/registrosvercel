import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Navigation from '../components/Navigation'

const AttentionsPage: React.FC<PageProps> = () => {
    return (
        <>
            <Navigation />
            <p>Atenciones</p>
        </>
    )
}

export default AttentionsPage

export const Head: HeadFC = () => <title>Attentions</title>

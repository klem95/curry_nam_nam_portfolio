import React from 'react'
import styled from 'styled-components';

const Container = styled.div `
    grid-area: footer;
`
const Footer = (props) => {
    return(
        <Container>
            <p>page developed by: xx</p>
        </Container>
    )
}

export default Footer
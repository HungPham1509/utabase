import * as React from 'react';
import {Container} from "@mui/material";
import Album from "./Album"

export default function Document() {
    return (
        <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
            <Album />
        </Container>
    )
}

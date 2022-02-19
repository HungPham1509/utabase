import React, {useState} from "react";
import {Document, Page} from "react-pdf/dist/esm/entry.webpack5";
import Pdf from "../../../themes/news/1. 大卒者の就職率、依然厳しく.pdf";
import {Container} from "@mui/material";

export default function News() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    function onDocumentLoadFailed(error) {
        console.log(error)
    }

    return (
        <Container sx={{py: 8}} maxWidth="md">
            <Document file={Pdf} onLoadSuccess={onDocumentLoadSuccess} onLoadError={onDocumentLoadFailed}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </Container>
    );
}

import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {ArrowBackIosNewRounded, ArrowForwardIosRounded} from "@mui/icons-material"
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Pagination, PaginationItem} from "@mui/material";
import {useHistory} from "react-router"
import {newsList} from "../../constants/data"
import {useState} from "react";

const theme = createTheme();

export default function Album() {
    const [type, setType] = useState(1)
    let history = useHistory();
    function handleItemsClick() {
        history.push("/documents/news/1");
    }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        backgroundColor: 'background.paper',
                        pt: 6,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Select sort of documents
                        </Typography>
                        <Stack
                            sx={{pt: 4}}
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={3}
                            justifyContent="center"
                        >
                            <Button variant="contained" fullWidth="100%">News</Button>
                            <Button variant="outlined" fullWidth="100%">Short Stories</Button>
                            <Button variant="outlined" fullWidth="100%">Great Japanese</Button>
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{py: 6}} maxWidth="lg" onClick={handleItemsClick}>
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {newsList.map((news) => (
                            <Grid item key={news.id} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer', width: "100%"}}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            height: '80%'
                                        }}
                                        image="https://source.unsplash.com/random"
                                        alt="random"
                                    />
                                    <CardContent sx={{flexGrow: 1}}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {news.title}
                                        </Typography>
                                        <Typography>
                                            {news.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">View</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Pagination
                    count={5}
                    color={"primary"}
                    renderItem={(item) => (
                        <PaginationItem
                            components={{previous: ArrowBackIosNewRounded, next: ArrowForwardIosRounded}}
                            {...item}
                        />
                    )}
                />
            </main>
        </ThemeProvider>
    );
}

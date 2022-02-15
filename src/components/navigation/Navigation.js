import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Drawer from './drawer/Drawer';
import MenuBar from './menuBar/MenuBar';
import {Route, Switch} from "react-router";
import Login from "../../pages/login/Login";
import Document from "../../pages/documents/Document";

const mdTheme = createTheme();

function DashboardContent() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <MenuBar position="absolute" open={open} clicked={toggleDrawer}/>
                <Drawer variant="permanent" open={open} clicked={toggleDrawer}/>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar/>
                    <Switch>
                        <Route path="/documents" component={Document}/>
                    </Switch>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function Navigation() {
    return <DashboardContent/>;
}

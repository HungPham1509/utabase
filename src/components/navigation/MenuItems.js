import * as React from "react";
import {useEffect, useState} from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import {useHistory, useLocation} from "react-router-dom"

export default function MenuItems() {
    let history = useHistory()
    let location = useLocation()

    function onItemClick(itemName) {
        history.push("/" + itemName)
    }

    function isItemActive(itemName) {
        return location.pathname.match("/" + itemName)
    }

    let activeItemStyle =  {
        backgroundColor: "rgb(25, 118, 210)",
        color: "white"
    }

    return (
        <React.Fragment>
            <ListItemButton onClick={() => onItemClick("dashboard")} style={isItemActive("dashboard") ? activeItemStyle : null}>
                <ListItemIcon>
                    <DashboardIcon style={isItemActive("dashboard") ? activeItemStyle : null}/>
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
            </ListItemButton>
            <ListItemButton onClick={() => onItemClick("documents")} style={isItemActive("documents") ? activeItemStyle : null}>
                <ListItemIcon>
                    <ShoppingCartIcon style={isItemActive("documents") ? activeItemStyle : null}/>
                </ListItemIcon>
                <ListItemText primary="Documents"/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <PeopleIcon/>
                </ListItemIcon>
                <ListItemText primary="Customers"/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <BarChartIcon/>
                </ListItemIcon>
                <ListItemText primary="Reports"/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <LayersIcon/>
                </ListItemIcon>
                <ListItemText primary="Integrations"/>
            </ListItemButton>
        </React.Fragment>
    )
}

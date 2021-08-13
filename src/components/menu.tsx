import {Divider, Drawer, List, ListItem, ListItemText, Typography, withStyles} from "@material-ui/core";
import React, {CSSProperties} from "react";
import {CustomMethod} from "../devTools";
import {Logo} from "./logo";
import {BuildTag} from "./buildTag";

const styles = {
    root: {
        minWidth: 200
    } as CSSProperties
};

let DevToolsDrawer = withStyles({
    paper: {
        minWidth: 300,
        maxWidth: 700,
        padding:'10px 10px'
    }
})(Drawer);

export function Menu({open, customMethods, onClose, buildName, buildDate, children}:{open:boolean, customMethods:CustomMethod[], onClose:()=>void, buildName:string, buildDate:Date, children?}){
    return <DevToolsDrawer open={open} anchor='right' onClose={onClose}>
        <Logo/>
        <Divider/>
        <BuildTag buildName={buildName} buildDate={buildDate}/>
        <Divider/>
        <Typography style={{fontWeight: 500}}>Custom functions</Typography>
        <List dense={true}>
            {customMethods.map(({name,method}:CustomMethod)=><ListItem key={name} button onClick={method}><ListItemText>{name}</ListItemText></ListItem>)}
        </List>
        <Divider/>
        {children}
    </DevToolsDrawer>
}
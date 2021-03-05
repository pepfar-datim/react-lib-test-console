import {Divider, Drawer, List, ListItem, ListItemText, withStyles} from "@material-ui/core";
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
        minWidth: 200,
        maxWidth: 400,
        padding:'55px 10px'
    }
})(Drawer);

export function Menu({open, customMethods, onClose, buildName, buildDate}:{open:boolean, customMethods:CustomMethod[], onClose:()=>void, buildName:string, buildDate:Date}){
    return <DevToolsDrawer open={open} anchor='right' onClose={onClose}>
        <Logo/>
        <Divider/>
        <BuildTag buildName={buildName} buildDate={buildDate}/>
        <Divider/>
        <List dense={true}>
            {customMethods.map(({name,method}:CustomMethod)=><ListItem key={name} button onClick={method}><ListItemText>{name}</ListItemText></ListItem>)}
        </List>
    </DevToolsDrawer>
}
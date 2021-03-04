import {Drawer, List, ListItem, ListItemText} from "@material-ui/core";
import React, {CSSProperties} from "react";
import {CustomMethod} from "../devTools";
import {Logo} from "./logo";
import {BuildTag} from "./buildTag";

const styles = {
    root: {
        minWidth: 200
    } as CSSProperties
};

export function Menu({open, customMethods, onClose, buildTag}:{open:boolean, customMethods:CustomMethod[], onClose:()=>void, buildTag:string}){
    return <Drawer open={open} anchor='right' onClose={onClose}> <br/><br/><br/>
        <Logo/>
        <BuildTag buildTag={buildTag}/>
        <List dense={true}>
            {customMethods.map(({name,method}:CustomMethod)=><ListItem key={name} button onClick={method}><ListItemText>{name}</ListItemText></ListItem>)}
        </List>
    </Drawer>
}
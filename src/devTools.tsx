import React, {CSSProperties} from "react";
import {Drawer, List, ListItem, ListItemText} from "@material-ui/core";
import {getData} from "@dhis2-app/api";
import {Menu} from "./components/menu";

const styles = {
    root: {
        position: 'fixed',
        top: 50,
        right: 9,
        zIndex: 10000,
        fontSize: 13
    } as CSSProperties
};

export type CustomMethod = {name:string, method:()=>void};

let customMethods:CustomMethod[] = [];

export function registerDevMethod(method:CustomMethod) {
    customMethods.push(method);
}

export class DevTools extends React.Component<{buildTag:string}, {isSuperUser:boolean, menuOpen: boolean}>{
    constructor(props:any) {
        super(props);
        this.checkSuperUser();
        this.state = {isSuperUser:false, menuOpen: false}
        window.addEventListener('keydown', this.keypress as any);
    }

    keypress = (e:React.KeyboardEvent<Element>)=>{
        if (e.key!==`\``) return;
        if (!this.toggleMenu) console.log('cant find')
        this.toggleMenu();
    }

    async checkSuperUser(){
        let isSuperUser = await getData('/me?fields=userGroups[name],userCredentials[userRoles[name]]')
            .then(response=>response.userCredentials.userRoles.map(r=>r.name).includes('Superuser ALL authorities'))
        this.setState({isSuperUser});
    }

    toggleMenu = ()=>{
        this.setState({menuOpen:!this.state.menuOpen});
    }

    render(){
        if (process.env.NODE_ENV==='test') return null;
        if(!this.state.isSuperUser) return null;
        console.log('Data Deduplication v2.0.0-rc10 > network check bugs & improvements')
        return <div style={styles.root}>
            <Menu open={this.state.menuOpen} onClose={this.toggleMenu} customMethods={customMethods} buildTag={this.props.buildTag}/>
        </div>;
    }
}





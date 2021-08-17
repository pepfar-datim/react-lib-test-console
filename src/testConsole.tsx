import React, {CSSProperties} from "react";
import {getData} from "@pepfar-react-lib/http-tools";
// import {Menu} from "./components/menu";

const Menu = React.lazy(() => import('./components/menu') as any);

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

export class TestConsole extends React.Component<{buildName?:string, buildDate:Date, children?}, {isSuperUser:boolean, menuOpen: boolean}>{
    constructor(props:any) {
        super(props);
        this.checkSuperUser();
        this.state = {isSuperUser:false, menuOpen: false}
        window.addEventListener('keydown', this.keypress as any);
    }

    keypress = (e:React.KeyboardEvent<Element>)=>{
        if (e.key!==`\``||!e.ctrlKey) return;
        if (!this.state.isSuperUser) console.log(`Can't open Dev-Tools. Not a superuser.`)
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
        return <div style={styles.root}>
            <Menu open={this.state.menuOpen} onClose={this.toggleMenu} customMethods={customMethods} buildName={this.props.buildName} buildDate={this.props.buildDate}>
                {this.props.children}
            </Menu>
        </div>;
    }
}





import React from 'react';
import ReactDOM from 'react-dom';
import {DevTools, registerDevMethod} from "../../src";
import {apiInit} from "@dhis2-app/api";
import {HeaderBar} from "./headerBar";

apiInit('https://dev-jakub.datim.org/',process.env.NODE_ENV);

registerDevMethod({name:'Hello world',method:()=>console.log('hello world')});

ReactDOM.render(
    <React.Fragment>
        DevTools Example
        <HeaderBar/>
        <DevTools buildName={'test build tag'} buildDate={new Date()}/>
    </React.Fragment>,
    document.getElementById('root')
);

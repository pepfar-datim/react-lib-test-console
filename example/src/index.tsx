import React from 'react';
import ReactDOM from 'react-dom';
import {TestConsole, registerDevMethod} from "../../src";
import {apiInit} from "@pepfar-react-lib/http-tools";
import {HeaderBar} from "./headerBar";

apiInit('https://dev-jakub.datim.org/',process.env.NODE_ENV);

registerDevMethod({name:'Hello world',method:()=>console.log('hello world')});

ReactDOM.render(
    <React.Fragment>
        DevTools Example
        <HeaderBar/>
        <TestConsole buildName={'test build tag'} buildDate={new Date()}/>
    </React.Fragment>,
    document.getElementById('root')
);

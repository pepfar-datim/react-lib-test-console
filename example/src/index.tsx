import React from 'react';
import ReactDOM from 'react-dom';
import {DevTools} from "../../src";
import {apiInit} from "@dhis2-app/api";
import {HeaderBar} from "./headerBar";

apiInit('https://dev-jakub.datim.org/',process.env.NODE_ENV);

ReactDOM.render(
    <React.Fragment>
        DevTools Example
        <HeaderBar/>
        <DevTools buildTag={'test build tag'}/>
    </React.Fragment>,
    document.getElementById('root')
);

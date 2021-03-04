import React, {CSSProperties} from 'react';
import {Typography} from "@material-ui/core";

const styles = {
    root: {
        width: '100%',
        height: 48,
        backgroundColor: `#2c6693`,
        position: 'fixed',
        top: 0,
        left: 0,
        color: 'white',
        zIndex: 10000000
    } as CSSProperties
}

export function HeaderBar(){
    return <div style={styles.root}>
        <Typography>DHIS2 Test</Typography>
    </div>
}
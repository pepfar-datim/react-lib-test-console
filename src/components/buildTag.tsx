import React from "react";
import {Chip, Typography} from "@material-ui/core";

const styles = {
    label:{
        fontWeight: 600
    }
}

export function BuildTag({buildName, buildDate}:{buildName:string, buildDate: Date}){
    return <React.Fragment>
        <Typography variant='caption' style={styles.label}>app build name</Typography>
        <Typography variant='caption'>{buildName}</Typography>
        <Typography variant='caption' style={styles.label}>app build date</Typography>
        <Typography variant='caption'>{buildDate.toDateString()}</Typography>
    </React.Fragment>

}
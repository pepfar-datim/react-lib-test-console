import React from "react";
import {Chip, List, ListItem, Typography} from "@material-ui/core";

const styles = {
    label:{
        fontWeight: 500
    }
}

export function BuildTag({buildName, buildDate}:{buildName?:string, buildDate: Date}){
    return <React.Fragment>
        {buildName &&<div>
            <Typography variant='caption' style={styles.label}>Build Name</Typography>
            <Typography variant='caption'>{buildName}</Typography>
        </div>}
        <Typography variant='caption' style={styles.label}>Build Date</Typography>
        <List>
            <ListItem>
                <Typography variant='caption'>{buildDate}</Typography>
            </ListItem>
        </List>
    </React.Fragment>

}
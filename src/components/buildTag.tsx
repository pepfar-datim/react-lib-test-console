import React from "react";
import {Chip, Typography} from "@material-ui/core";

export function BuildTag({buildTag}:{buildTag:string}){
    return <React.Fragment>
        <Typography variant='caption'>App build tag</Typography>
        <Chip size='small' label={buildTag}/>
    </React.Fragment>

}
import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../Utils/OvermindHelper";
import {getTextAndListGrid} from "../Utils/GlobalMethods";
import {contatosInfos} from "../Utils/GlobalVariables";

const ContatosRoute = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid spacing={1} container xs item>
            {
                contatosInfos.map((item) => {
                    return getTextAndListGrid(item, state.belowSm ? 90 : 80);
                })
            }
        </Grid>
    );
};

export default ContatosRoute;

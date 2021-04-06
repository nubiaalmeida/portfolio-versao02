import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../Utils/OvermindHelper";
import {getTextAndListGrid} from "../Utils/GlobalMethods";
import {habilidades} from "../Utils/GlobalVariables";

const HabilidadesRoute = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid spacing={1} container xs item direction='row'>
            {
                habilidades.map((item) => {
                    return getTextAndListGrid(item);
                })
            }
        </Grid>
    );
};

export default HabilidadesRoute;

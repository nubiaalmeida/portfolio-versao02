import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../Utils/OvermindHelper";
import {getTextAndListGrid} from "../Utils/GlobalMethods";
import {projetos} from "../Utils/GlobalVariables";

const ProjetosRoute = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid spacing={1} container xs item direction='row'>
            {
                projetos.map((item) => {
                    return getTextAndListGrid(item, 96);
                })
            }
        </Grid>
    );
};

export default ProjetosRoute;

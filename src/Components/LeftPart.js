import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../Utils/OvermindHelper";
import {getContentHeightWidth} from '../Utils/GlobalMethods'
import Paper from "@material-ui/core/Paper";
import AvatarText from "../SubComponents/Helpers/AvatarText";
import LeftMenus from "../SubComponents/Helpers/LeftMenus";
import SmallBottomLinks from "../SubComponents/Merged/SmallBottomLinks";

const LeftPart = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid style={{...getContentHeightWidth(state.belowSm), width: '100%'}} container item xs={11} sm={11}
              md={3} lg={3}
              xl={2}>
            <Paper elevation={12} style={{...getContentHeightWidth(state.belowSm), width: '100%'}}>
                <Grid style={{...getContentHeightWidth(state.belowSm), width: '100%'}} container direction="column"
                      justify="space-around" alignContent='center' alignItems="center">

                    <AvatarText/>
                    <LeftMenus/>
                    <SmallBottomLinks/>

                </Grid>
            </Paper>
        </Grid>
    );
};

export default LeftPart;

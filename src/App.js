import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "./Utils/OvermindHelper";
import {MemoryRouter, Redirect, Route} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {getContentHeightWidth, getParentHeightWidth} from './Utils/GlobalMethods'
import LeftPart from "./Components/LeftPart";
import RightPart from "./Components/RightPart";

const styles = {
    parent: getParentHeightWidth(),
    checker: {
        background: "#FFF"
    }
}

const getRightPartComponent = (state) => {
    if (state.belowSm) {
        if (state.drawerState) {
            // console.log("NOT SHOWING RIGHT1")
            return null;
        } else {
            // console.log("SHOWING RIGHT1")
            return <RightPart/>
        }
    } else {
        // console.log("SHOWING RIGHT2")
        return <RightPart/>
    }
}

const App = () => {
    const {state, actions} = useOvermind()
    const theme = useTheme()
    const belowSm = useMediaQuery(theme.breakpoints.down('sm'))

    useEffect(() => {
        actions.setBelowSm(belowSm)
    }, [belowSm])

    return (
        <Grid container style={{backgroundColor: state.primaryColor, ...styles.parent}}>

            <MemoryRouter>
                <Route exact path="/">
                    <Redirect to="/sobre"/>
                </Route>
                <Grid container justify='center' alignItems='center' alignContent='center'>
                    <Paper elevation={16} style={getContentHeightWidth(belowSm)}>
                        <Grid container direction='row'>
                            {
                                state.drawerState && <LeftPart/>
                            }
                            {
                                getRightPartComponent(state)
                            }
                        </Grid>
                    </Paper>
                </Grid>
            </MemoryRouter>
        </Grid>
    );
};

export default App;

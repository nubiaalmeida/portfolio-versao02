import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../Utils/OvermindHelper";
import TopLeftInfos from "../SubComponents/Merged/TopLeftInfos";
import TopRightButtons from "../SubComponents/Merged/TopRightButtons";
import {Route, Switch, useLocation} from "react-router-dom";
import {getContentHeightWidth} from "../Utils/GlobalMethods";
import ProjetosRoute from "../Routes/ProjetosRoute";
import HabilidadesRoute from "../Routes/HabilidadesRoute";
import ContatosRoute from '../Routes/ContatosRoute';
import SobreRoute from "../Routes/SobretRoute";
import ColorPickerDialog from "../Dialogs/ColorPickerDialog";

const styles = {
    upperPart: {
        padding: 16,
    },
    content: {
        overflowY: 'auto',
        paddingLeft: 12,
        paddingRight: 4,
        paddingBottom: 8
    }
}

const getBottomElementsHeight = (state) => {
    var topElementHeight = document.getElementById('right-top-elements').clientHeight
    var containerHeight = getContentHeightWidth(state.belowSm).height
    var bottomElementHeight = containerHeight - topElementHeight;

    return {
        maxHeight: bottomElementHeight - 5,
        height: bottomElementHeight - 5,
    }
}

const RightPart = () => {
    const {state, actions} = useOvermind()
    const [bottomElementStyle, setBottomElementStyle] = useState(null)
    let location = useLocation();

    useEffect(() => {
        if (!bottomElementStyle) {
            setBottomElementStyle(getBottomElementsHeight(state))
        }
    }, [])

    useEffect(() => {
        document.getElementById('right-bottom-elements').scroll(0, 0)
    }, [location])

    return (
        <Grid id='right-container' style={{...getContentHeightWidth(state.belowSm), width: '100%'}} container xs item
              direction='row'
              alignContent='flex-start'>

            {/*     TOP PART        */}
            <Grid id='right-top-elements' style={styles.upperPart} container direction='row' justify='space-between'>
                <TopLeftInfos/>
                <TopRightButtons/>
            </Grid>

            <Grid id='right-bottom-elements' container style={{...bottomElementStyle, ...styles.content}}>
                <Switch>
                    <Route exact path="/sobre" component={SobreRoute}/>
                    <Route exact path="/habilidades" component={HabilidadesRoute}/>
                    <Route exact path="/projetos" component={ProjetosRoute}/>
                    <Route exact path="/contatos" component={ContatosRoute}/>
                </Switch>
            </Grid>

            <ColorPickerDialog/>
        </Grid>
    );
};

export default RightPart;

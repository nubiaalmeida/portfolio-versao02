import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../Utils/OvermindHelper";
import TypographyMultilinedWithIcon from "../SubComponents/ListItems/TypographyMultilinedWithIcon";
import {myDetails} from "../Utils/MainItems";
import avatarImage from "../Assets/avatar2.png";

const aboveSmAvatarSize = {height: '100%'}
const belowSmAvatarSize = {height: 175}

const SobreRoute = () => {
    const {state, actions} = useOvermind()
    const [avatarGridHeight, setAvatarGridHeight] = useState(0)
    const [aboutGridSizeHeight, setAboutGridSizeHeight] = useState(0)

    useEffect(() => {
        var currentAboutGridHeight = document.getElementById('aboutGrid').offsetHeight
        var currentAboutMeTextGridHeight = document.getElementById('aboutMeTextGrid').offsetHeight
        if (!state.belowSm) {
            setAvatarGridHeight(currentAboutGridHeight - currentAboutMeTextGridHeight - 40)
        }
        setAboutGridSizeHeight(currentAboutGridHeight)
    }, [aboutGridSizeHeight])

    return (
        <Grid id='aboutGrid' container direction='column' justify='flex-end' alignItems='center' alignContent='center'>
            <Grid style={{height: avatarGridHeight}} id='avatarImageGrid' item xs container justify='center'
                  alignItems='center' alignContent='center'>
                <img style={state.belowSm ? belowSmAvatarSize : aboveSmAvatarSize} src={avatarImage}/>
            </Grid>

            <Grid id='aboutMeTextGrid' item style={{marginBottom: 8, overflow: 'auto'}}>
                <TypographyMultilinedWithIcon desc={myDetails}>
                    Sobre mim
                    
                </TypographyMultilinedWithIcon>
            </Grid>
        </Grid>
    );
};

export default SobreRoute;

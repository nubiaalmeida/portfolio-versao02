import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../../Utils/OvermindHelper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {myImageLink, myName, myOccupation, institution} from '../../Utils/MainItems'
import avatarImage from '../../Assets/avatar.png'

const styles = {
    avatar: {
        height: 125,
        width: 125,
    },
    title: {
        fontSize: 14,
        color: "#212121",
        marginTop: 24,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 13,
        color: "#212121",
    },
    profession:{
        fontSize: 11,
        color: "#212121",
    },
}

const AvatarText = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid item xs sm md lg xl container direction="column" justify="center"
              alignItems="center">
            <Avatar style={styles.avatar} src={myImageLink ? myImageLink : avatarImage}></Avatar>

            <Typography style={styles.title}>{myName.toUpperCase()}</Typography>
            <Typography style={styles.subtitle}>{myOccupation}</Typography>
            <Typography style={styles.profession}>{institution}</Typography>
        </Grid>
    );
};

export default AvatarText;

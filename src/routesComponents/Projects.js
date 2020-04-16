import React from 'react';
import Grid from "@material-ui/core/Grid";
import ListItem from "../components/ListItem";
import {androidApps} from "../vars/ProjectItems";
import TypographyWithIcon from "../helperComponents/TypographyWithIcon";

const styles = {
    listGridParent: {
        maxHeight: '85%',
        overflowY: 'auto',
        marginRight: 8,
        marginLeft: 8,
    },
    listGridInner: {}
}

const Projects = () => {
    return (
        <Grid spacing={1} style={styles.listGridParent} container xs item direction='row'>
            <TypographyWithIcon>Android Apps</TypographyWithIcon>
            <Grid style={{marginBottom: 16}} container direction='row'>
                {
                    androidApps.map(item => <ListItem item={item}/>)
                }
            </Grid>

        </Grid>
    );
};

export default Projects;
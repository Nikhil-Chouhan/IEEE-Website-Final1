import React from 'react'
import SimpleBottomNavigation from '../layout/bottomNav';
import 'materialize-css/dist/css/materialize.min.css';
import AboutMain from '../components/About/AboutMain';
import Grid from '@material-ui/core/Grid';


const About = () => {
    return (
        <>
            <div>
                <div className="mainLand">
                    <Grid container spacing={40}>
                        <Grid item xs={12} style={{ marginBottom: 70}}  className="landingContent">
                            <AboutMain />
                        </Grid>
                        <Grid item xs={12} className="nav">
                            <SimpleBottomNavigation />
                        </Grid>
                    </Grid>
                </div>
            </div>


        </>
    )
}

export default About;
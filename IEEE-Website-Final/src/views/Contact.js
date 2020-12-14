import React from 'react'
import SimpleBottomNavigation from '../layout/bottomNav'
import Grid from '@material-ui/core/Grid';
import Dashboard from '../components/ContactUs/Dashboard';

export default function Contact() {
    return (
        <div>
            <div className="mainLand">
                <Grid container spacing={3}>
                    <Grid item xs={12} style={{ marginBottom: 50}}  className="landingContent">
                        <Dashboard />
                    </Grid>
                    <Grid item xs={12} className="nav">
                        <SimpleBottomNavigation />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
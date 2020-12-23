import React from 'react'
import SimpleBottomNavigation from '../layout/bottomNav'
import Grid from '@material-ui/core/Grid'
import BlogPage from '../components/Blogs/Blogs'

export default function Blogs() {
    return (
        <div>
            <div className="mainLand">
                <Grid container spacing={3}>
                    <Grid item xs={12} style={{ marginBottom: 80, backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/Blog%2Fbg.png?alt=media&token=0694eb8c-48e6-491a-b585-a9a8f3d1f7c6)',   backgroundPosition: 'center', backgroundSize: 'cover'}}  className="blogpage">
                        <BlogPage/>
                    </Grid>
                    <Grid item xs={12} className="nav">
                        <SimpleBottomNavigation />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
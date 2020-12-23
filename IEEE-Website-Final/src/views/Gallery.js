import React, { useEffect, useState } from 'react'
import SimpleBottomNavigation from '../layout/bottomNav'
import bg from '../img/Gallery/bg.png'
import Grid from '@material-ui/core/Grid';
import GalleryMain from '../components/Gallery/Gallery'
import { firestore } from '../config';

var gallery_data
firestore.collection('gallery').doc("k6vcccB9LwDa7CIsQZR9")
.onSnapshot(function(doc) {
    gallery_data = doc.data().data
});

export default function Gallery() {

    return (
        <div>
            <div className="mainLand">
                <Grid container spacing={3}>
                    <Grid item xs={12} style={{ marginBottom: 50, backgroundImage: 'url(https://coolbackgrounds.io/images/backgrounds/index/compute-ea4c57a4.png)',   backgroundPosition: 'center', backgroundSize: 'cover'}}  className="gallerypage">
                        <GalleryMain />
                    </Grid>
                    <Grid item xs={12} className="nav">
                        <SimpleBottomNavigation />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
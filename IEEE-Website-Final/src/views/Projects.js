import React, { useEffect, useState } from 'react'
import SimpleBottomNavigation from '../layout/bottomNav'
import Grid from '@material-ui/core/Grid';
import ProjectsMain from '../components/Projects/ProjectsMain';
import { firestore } from '../config';

const Projects = () => {
    const [compeleted, setCompleted] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    useEffect(()=>{
        firestore.collection('projects').get().then(snapshot=>{
            let temp = []; //ongoing ones
            let temp2 = []; //completed ones
            snapshot.forEach(snap=>{
                console.log(snap.data().Completed)
                if(snap.data().Completed === false){
                    temp.push(snap.data());
                }else{
                    temp2.push(snap.data());
                }
            });
            // console.log(temp, temp2)
            setOngoing(temp);
            setCompleted(temp2);
        })
    }, []);

    return (
        <div>
            <div className="mainLand">
                <Grid container spacing={3}>
                    <Grid item xs={12} className="landingContent">
                        {
                            (compeleted || ongoing) && <ProjectsMain compeleted={compeleted} ongoing={ongoing}/>
                        }
                    </Grid>
                    <Grid item xs={12}  className="nav">
                        <SimpleBottomNavigation />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Projects;
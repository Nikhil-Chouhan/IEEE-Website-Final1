import React from 'react'
import SplashScreen from '../layout/SplashScreen'
import SimpleBottomNavigation from '../layout/bottomNav'
import Grid from '@material-ui/core/Grid';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import logo from '../img/IEEElogo.png'
import ParallaxCard from '../components/LandingPage/ParallaxCard';
import { Player } from 'video-react';
import headvideo from '../img/LandingPage/LandingVideo.mp4'
import TestimonialPage from '../components/LandingPage/Testimonial'
import Landing_Carousel from '../components/LandingPage/Landing_Carousel'
import Landing_Blog from '../components/LandingPage/Landing_Blog'

const LandingPage = () => {
    return (
        <div>
            <div className="mainLand">
                <Grid container spacing={40}>
                    <Grid item xs={12} className="landingContent" style={{ marginBottom: 316}}>
                    <div>
                            <div className="LandingVideo">
                                <video className='videoTag' autoPlay loop muted style={{
                                    display: "flex",
                                    width: "100%",
                                    height: "90vh",
                                    objectFit: "cover"
                                }}>
                                    <source src={headvideo} type='video/mp4' />
                                </video>
                            </div>
                             <div>
                             <Landing_Carousel />
                             </div>
                        </div>
                    </Grid>
                      {/* <Grid item xs={12} className="LandingBlog">
                              <div>
                             <Landing_Blog />
                            </div> 
                    </Grid> */}
                    <Grid item xs={12}>
                        <div className="LandingTestimonial">
                            <TestimonialPage />
                        </div>
                    </Grid>
                    <Grid item xs={12} className="nav">
                        <SimpleBottomNavigation />
                    </Grid>
                </Grid>
            </div>

        </div>
      )
}

export default LandingPage

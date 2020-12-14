import React, {useEffect} from 'react';
import GridsC from './GridsC';
import GridsH from './GridsH';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Carousel from './Carousel';



const AboutComponent = () => {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);
    return(
        <>
            {/* core members */}
            <div className="row">
                <div className="col s12" style={{borderRadius:"24px"}}>
                    <div className="card-panel teal" style={{borderRadius:"24px 24px 0 0"}}>
                        <span className="white-text">
                            <h4>Our Core Members</h4>
                        </span>
                    </div>
                    <GridsC />
                    <div className="card-panel teal" style={{borderRadius:"0 0 24px 24px"}}>
                    </div>
                </div>
            </div>

            {/* head members */}
            <div className="row">
                <div className="col s12" style={{borderRadius:"24px"}}>
                    <div className="card-panel teal" style={{borderRadius:"24px 24px 0 0"}}>
                        <span className="white-text">
                            <h4>Our Heads</h4>
                        </span>
                    </div>
                    <GridsH />
                    <div className="card-panel teal" style={{borderRadius:"0 0 24px 24px"}}>
                    </div>
                </div>
            </div>

            {/* Technical Department */}
            <div className="row">
                <div className="col s12" style={{borderRadius:"24px"}}>
                    <div className="card-panel teal" style={{borderRadius:"24px 24px 0 0"}}>
                        <span className="white-text">
                            <h4>Technical Department</h4>
                        </span>
                    </div>
                    <Carousel />
                    <div className="card-panel teal" style={{borderRadius:"0 0 24px 24px"}}>
                    </div>
                </div>
            </div>

            {/* Public Relations Department */}
            <div className="row">
                <div className="col s12" style={{borderRadius:"24px"}}>
                    <div className="card-panel teal" style={{borderRadius:"24px 24px 0 0"}}>
                        <span className="white-text">
                            <h4>Public Relations Department</h4>
                        </span>
                    </div>
                    <Carousel />
                    <div className="card-panel teal" style={{borderRadius:"0 0 24px 24px"}}>
                    </div>
                </div>
            </div>

            {/* Digital Creatives Department */}
            <div className="row">
                <div className="col s12" style={{borderRadius:"24px"}}>
                    <div className="card-panel teal" style={{borderRadius:"24px 24px 0 0"}}>
                        <span className="white-text">
                            <h4>Digital Creatives Department</h4>
                        </span>
                    </div>
                    <Carousel />
                    <div className="card-panel teal" style={{borderRadius:"0 0 24px 24px"}}>
                    </div>
                </div>
            </div>

            {/* Corporate Relations Department */}
            <div className="row">
                <div className="col s12" style={{borderRadius:"24px"}}>
                    <div className="card-panel teal" style={{borderRadius:"24px 24px 0 0"}}>
                        <span className="white-text">
                            <h4>Corporate Relations Department</h4>
                        </span>
                    </div>
                    <Carousel />
                    <div className="card-panel teal" style={{borderRadius:"0 0 24px 24px"}}>
                    </div>
                </div>
            </div>
        </>
    )    
}
export default AboutComponent

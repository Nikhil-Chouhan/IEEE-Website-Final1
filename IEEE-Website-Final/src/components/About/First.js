import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import team from '../../img/About/team.png';
import mission from '../../img/About/mission.png';
import vision from '../../img/About/vision.png';

const First = () => {
    return (
            <div className="row why" id="whyEnrollar">
                <div id="roll" className="col s10 offset-s1 l4" style={{"borderRadius":'24px'}}>
                    <div className="card" style={{"borderRadius":"24px"}}>
                        <div className="card-image waves-effect waves-block waves-light"
                        style={{"borderRadius":"24px 24px 0 0"}}
                        >
                        <img className="activator" src={ team } alt="cover"/>
                        </div>
                        <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                            About Us?
                            <i className="material-icons right">more_vert</i></span>
                        <p>Click to find out.</p>
                        </div>
                        <div className="card-reveal" style={{"backgroundColor":"#2a9d8f","color":"white"}}>
                        <span className="card-title white-text text-darken-4">
                            About Us?
                            <i className="material-icons right">close</i>
                        </span>
                        <p>
                            IEEE MPSTME, a student chapter of IEEE, formed by the
                            Undergraduates of MPSTME in 2017, is a student led organization that
                            strives to collaborate on world-changing technologies, from computing
                            and sustainable energy systems to aerospace, robotics, communication
                            and more. Over time it has grown into a community of more than 50
                            members all from different course streams. We at IEEE MPSTME believe
                            that there is a better way to share, gain and build up our knowledge about
                            the advancing technologies and the ways of a fast-moving and unstoppable generation.
                        </p>
                        </div>
                    </div>
                </div>
                <div id="roll" className="col s10 offset-s1 l4" style={{"borderRadius":'24px'}}>
                    <div className="card" style={{"borderRadius":"24px"}}>
                        <div className="card-image waves-effect waves-block waves-light"
                        style={{"borderRadius":"24px 24px 0 0"}}
                        >
                        <img className="activator" src={ vision } alt="cover"/>
                        </div>
                        <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                            Vision
                            <i className="material-icons right">more_vert</i></span>
                        <p>Click to find out.</p>
                        </div>
                        <div className="card-reveal" style={{"backgroundColor":"#2a9d8f","color":"white"}}>
                        <span className="card-title white-text text-darken-4">
                            Vision
                            <i className="material-icons right">close</i>
                        </span>
                        <p>
                            Our vision is to be essential to the global technical community and to
                            upcoming technical professionals everywhere and be recognized for the
                            contributions to technology.
                        </p>
                        </div>
                    </div>
                </div>
                <div id="roll" className="col s10 offset-s1 l4" style={{"borderRadius":'24px'}}>
                    <div className="card" style={{"borderRadius":"24px"}}>
                        <div className="card-image waves-effect waves-block waves-light"
                        style={{"borderRadius":"24px 24px 0 0"}}
                        >
                        <img className="activator" src={ mission } alt="cover"/>
                        </div>
                        <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                            Mission
                            <i className="material-icons right">more_vert</i></span>
                        <p>Click to find out.</p>
                        </div>
                        <div className="card-reveal" style={{"backgroundColor":"#2a9d8f","color":"white"}}>
                        <span className="card-title white-text text-darken-4">
                            Mission
                            <i className="material-icons right">close</i>
                        </span>
                        <p>
                            Our mission is to foster technological innovation and excellence for the benefit of humanity
                        </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default First
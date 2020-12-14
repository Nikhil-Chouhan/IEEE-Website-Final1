import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";
import Parallax from "./ParallaxMain";

import logo from '../../img/IEEElogo.png';



import styles from "../../assets/jss/material-kit-react/views/profilePage";

// different components
import First from './First';
import AboutTeam from './About';

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Parallax small filter image="https://images.unsplash.com/photo-1518818419601-72c8673f5852?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={logo} alt="IEEE Logo" className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title} style={{fontFamily:"'Lexend Deca', sans-serif", color:"black"}}>IEEE MPSTME</h3>
                    <h6>About Us</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
              We offer technology as a solution, the best there is.{" "}
              </p>
            </div>
            <First />
            <AboutTeam />
          </div>
        </div>
      </div>
    </div>
  );
}

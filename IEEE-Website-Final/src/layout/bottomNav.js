import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AllOutIcon from '@material-ui/icons/AllOut';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import BurstModeIcon from '@material-ui/icons/BurstMode';
import EventIcon from '@material-ui/icons/Event';
import BookIcon from '@material-ui/icons/Book';
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';
import IEEElogo from '../img/IEEElogo.png'
import { Link, NavLink, Redirect } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});


const SimpleBottomNavigation = (props) => {

    const [value, setValue] = React.useState(0);

    // const changePage = (page) => {
    //     console.log("Is thhis aosjdfn: ", page)
    //     return (
    //         window.location = page
    //     )
    // }

    return (
        <>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className="bottomNavbar hide-on-small-only"
                onClick={e => e.preventDefault()}
            >
                <BottomNavigationAction component={Link} to='/about' label="About" icon={<AllOutIcon />} />
                <BottomNavigationAction component={Link} to='/projects' label="Projects" icon={<AccountTreeIcon />} />
                <BottomNavigationAction component={Link} to='/blogs' label="Blogs" icon={<BookIcon />} />
                <Fab component={Link} to='/' className="floatBtn">
                    <Avatar alt="IEEE logo" src={IEEElogo}/>
                </Fab>
                <BottomNavigationAction component={Link} to='/events' label="Events" icon={<EventIcon />} />
                <BottomNavigationAction component={Link} to='/gallery' label="Gallery" icon={<BurstModeIcon />} />
                <BottomNavigationAction component={Link} to='/contactus' label="Contact Us" icon={<FavoriteIcon />} />
            </BottomNavigation>
        </>
    );
}

export default SimpleBottomNavigation

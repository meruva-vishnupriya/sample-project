import React from "react";
import { Link } from "react-router-dom"
import Dashboard from './DashBoard';
import Grades from './Grades';
import Help from './Help';
import About from'./About';
function Header() {
        return (
            <>
            
            <header className="header">
                        <Link to="/ojha"><div className="fornav">Dashboard</div></Link>
                <Link to="/bhabani"><div className="fornav">Grades</div></Link>
                <Link to="/sankar"><div className="fornav">Help</div></Link>
                <Link to="/Vishnu"><div className="fornav">About</div></Link>


                </header>
            </>
            
        );
    }


export default Header;

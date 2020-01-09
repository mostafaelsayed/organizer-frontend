import {Component} from 'react';
import React from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component {
    render() {
        return (
            <div>
                <Link className="footer-link" to="/contact-us">Contact Us</Link>
                
                <Link className="footer-link" to="/help">Help</Link>
            </div>
        );
    }
}


export default Footer;
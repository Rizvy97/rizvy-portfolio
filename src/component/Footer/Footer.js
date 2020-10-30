import React from 'react';
import './Footer.css';
import { GoRepoForked } from 'react-icons/go';

const Footer = () => {
    return (
        <div className='foooter'>
            <div className="container skill">
                <div className="row copy">
                    <div className="col-12 col-sm-12 col-md-12 d-flex justify-content-center align-items-center justify-content-between">
                        <small>Copyright &copy; 2020 Rizvy Ahamed</small>
                        <div className="d-flex align-items-center dev">
                            <h4> <span></span> Developed BY ME</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
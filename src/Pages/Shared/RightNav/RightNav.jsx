import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='mb-2' variant="outline-success"> <FaGoogle /> Login with Google</Button>
            <Button variant="outline-success"><FaGithub /> Login with GitHub</Button>
            <div className='mb-4'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
        </div>
    );
};

export default RightNav;
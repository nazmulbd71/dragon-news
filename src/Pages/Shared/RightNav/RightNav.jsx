import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

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
            <div className='card'>
                <img className='card-img w-100' src={bg} alt="" />
                <div className='d-flex align-items-center justify-content-center text-center  card-img-overlay'>
                    <div className='card-body text-light'>
                        <h3 className='card-title font-weight-bolder'>Create an Amazing Newspaper</h3>
                        <p className='card-subtitle my-5'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more...</p>
                        <button className='btn btn-danger'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightNav;
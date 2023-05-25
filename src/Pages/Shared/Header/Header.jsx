import React from 'react';
import logo from '../../../assets/logo.png'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import moment from 'moment';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className='text-center mt-4'>
                <img src={logo} alt="" />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee>
                    I can be a React component, multiple React components, or just some text. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi tempore consequuntur nulla. Et delectus dolores expedita autem nobis voluptates, possimus praesentium excepturi illum nostrum vero tempore deleniti molestiae impedit? Delectus.
                </Marquee>
            </div>

        </Container>
    );
};

export default Header;
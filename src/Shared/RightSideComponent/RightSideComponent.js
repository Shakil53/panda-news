import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ImGoogle, ImGithub, ImFacebook, ImTwitter, ImTwitch, ImInstagram, ImPinterest2, ImWhatsapp } from "react-icons/im";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCalrosle from '../BrandCalrosle/BrandCalrosle';


const RightSideComponent = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className="mb-2" variant="outline-primary"><ImGoogle /> Login with Google</Button>
                <Button variant="outline-dark"><ImGithub /> Login with Github</Button>
                <h5 className='mt-4 '>Find Us On</h5>
            </ButtonGroup>
            <ListGroup>

                <ListGroup.Item variant='secondary' className='mb-2'><ImFacebook></ImFacebook> Facebook</ListGroup.Item>
                <ListGroup.Item variant='secondary' className='mb-2'><ImTwitter></ImTwitter> Twitter</ListGroup.Item>
                <ListGroup.Item variant='secondary' className='mb-2'><ImTwitch></ImTwitch> Twitch</ListGroup.Item>
                <ListGroup.Item variant='secondary' className='mb-2'><ImInstagram></ImInstagram> Instagram</ListGroup.Item>
                <ListGroup.Item variant='secondary' className='mb-2'><ImWhatsapp></ImWhatsapp> Instagram</ListGroup.Item>
                <ListGroup.Item variant='secondary' className='mb-2'><ImPinterest2></ImPinterest2> Pinterest</ListGroup.Item>
            </ListGroup>
            <div>
                <BrandCalrosle></BrandCalrosle>
            </div>


        </div>
    );
};

export default RightSideComponent;
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar, } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
    const { _id, title, author, total_view, details, image_url, rating } = news;
    console.log(news)
    return (
        <Card className='mb-3'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <Image
                        className='me-3'
                        roundedCircle
                        src={author?.img}
                        style={{ height: '60px' }}
                    ></Image>
                    <div>
                        <p className='mb-0'>{author.name}</p>
                        <p className='mb-0'><small>{author?.published_date}</small></p>
                    </div>
                </div>

                <div>
                    <FaRegBookmark className='me-2'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length > 250 ?
                        <p>{details.slice(0, 250) + '...'}<Link to={`/news/${_id}`}>Read More</Link></p> :
                        <p>{details}</p>
                    }
                </Card.Text>

            </Card.Body>
            <Card.Footer className='d-flex justify-content-between align-item-center'>
                <div>
                    <FaStar className='text-warning me-1'></FaStar>
                    <small>{rating?.number}</small>
                </div>
                <div>
                    <FaEye className='me-1'></FaEye>
                    <span><small>{total_view}</small></span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;
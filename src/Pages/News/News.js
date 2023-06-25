import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = () => {
    const news = useLoaderData();

    const { title, details, image_url, category_id } = news;

    return (
        <Card>

            <Card.Title className='mt-2 ms-2'>{title}</Card.Title>
            <Card.Img variant='top' src={image_url} />
            <Card.Body>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">All news in this Category</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;
import moment from 'moment';
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const NewsCard = ({ news }) => {
    const { details, image_url, author, title, _id } = news
    return (
        <div>
            <Card className='my-4'>
                <Card.Header className='d-flex align-items-center'>
                    <Image roundedCircle style={{ height: '40px' }} src={author?.img}></Image>
                    <div className='ps-2 flex-grow-1'>
                        <p className='mb-0'>{author?.name}</p>
                        <p><small>{moment(author?.published_date).format('yyyy-MM-D')}</small></p>
                    </div>
                    <div>
                        <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length < 250 ? <>{details}</> :
                                <>
                                    {details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link>
                                </>
                        }
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default NewsCard;
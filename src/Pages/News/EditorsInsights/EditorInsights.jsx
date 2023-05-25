import React from 'react';
import image1 from '../../../assets/editorsInsight1.png'
import image2 from '../../../assets/editorsInsight2.png'
import image3 from '../../../assets/editorsInsight3.png'
import { Card } from 'react-bootstrap';


const EditorInsights = () => {
    return (
        <div className='d-flex justify-content-between mt-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image2} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image3} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default EditorInsights;
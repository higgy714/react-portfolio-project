import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



function RenderCoaster(coaster) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={coaster.image} alt={coaster.name} />
                    <CardBody>
                        <CardTitle>{coaster.name}</CardTitle>
                        <CardText>{coaster.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

function RenderReviews(reviews) {
        if (reviews) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Reviews</h4>
                    {reviews.map(review => {
                        return (
                            <div key={review.id}>
                                <p>{review.text}</p>
                                <p>--{review.author}</p>
                            </div>
                        )
                    })
                    }
                </div>
            )
        }
        return <div></div>
    }

function CoasterInfo(props) {  
        if (props.coaster) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderCoaster coaster={props.coaster} />
                        <RenderReviews reviews={props.coaster.reviews} />
                    </div>
                </div>
            );
        }
        return <div />;
    }


export default CoasterInfo;
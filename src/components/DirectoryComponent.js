import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,  CardTitle } from 'reactstrap';
import CoasterInfo from './CoasterInfoComponent';

function RenderDirectoryItem({ coaster, onClick }) {
    return (
        <Card onClick={() => onClick(coaster.id)}>
            <CardImg width="100%" src={coaster.image} alt={coaster.name} />
            <CardImgOverlay>
                <CardTitle>{coaster.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Directory(props) {

    const directory = props.coasters.map(coaster => {
        return (
            <div key={coaster.id} className="col-md-5 m-1">
                <RenderDirectoryItem coaster={coaster} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;
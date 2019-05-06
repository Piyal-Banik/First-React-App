import React from 'react'
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap'

    function RenderComments({comments}) {
        const comment = comments.map((eachComment) => {
            return (
                <ul className = "list-unstyled" key={eachComment.id}>
                    <p>{eachComment.comment}</p>
                    <p>--{eachComment.author},  
                        {new Intl.DateTimeFormat('en-US', {year: 'numeric', month : 'short', day : '2-digit'}).format(
                            new Date(Date.parse(eachComment.date)))}</p>
                </ul>
            );
        });

        return comment;
    }

    function RenderDish ({dish}) {
        return(
            <Card>
                <CardImg width="100%" object src = {dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>
                        {dish.name}
                    </CardTitle>
                    <CardText>
                        {dish.description}
                    </CardText>
                </CardBody>
            </Card>
        );
        
    }

    const DishDetail = (props) => {
        if(props.dish != null) {
            return (
                <div className = "container">
                    <div className = "row">
                        <div className ="col-12 col-md-5 m-1">
                            <RenderDish dish = {props.dish} />
                        </div>
                        <div className = "col-12 col-md-5 m-1">
                            <div>
                                <h4>Comments</h4>
                            </div>
                            <div>
                                <RenderComments comments = {props.dish.comments} />
                            </div>
                        </div>
                    </div>      
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }


export default DishDetail;
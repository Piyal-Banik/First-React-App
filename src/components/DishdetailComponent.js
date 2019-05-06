import React, {Component} from 'react'
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap'

class DishDetail extends Component {
    renderComments(comments) {
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

    renderDish(dish) {
        return(
            <Card>
                <CardImg width="100%" object src = {this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                    <CardTitle>
                        {this.props.dish.name}
                    </CardTitle>
                    <CardText>
                        {this.props.dish.description}
                    </CardText>
                </CardBody>
            </Card>
        );
        
    }

    render () {
        if(this.props.dish != null) {
            return (
                <div className = "container">
                    <div className = "row">
                        <div className ="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div className = "col-12 col-md-5 m-1">
                            <div>
                                <h4>Comments</h4>
                            </div>
                            <div>
                                {this.renderComments(this.props.dish.comments)}
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
}

export default DishDetail;
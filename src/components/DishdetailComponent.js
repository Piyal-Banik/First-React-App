import React, {Component} from 'react'
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap'

class DishDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
            dish: props.dishSelected,
        }
    }

    componentWillReceiveProps(props) {
        this.setState({dish: props.dishSelected});
    }

    renderComments(comments) {
        const comment = comments.map((eachComment) => {
            return (
                <ul className = "list-unstyled" key={eachComment.id}>
                    <p>{eachComment.comment}</p>
                    <p>--{eachComment.author}, {eachComment.date}</p>
                </ul>
            );
        });

        return comment;
    }

    render () {
        if(this.state.dish != null) {
            return (
                <div className = "row">
                    <div className ="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" object src = {this.state.dish.image} alt={this.state.dish.name} />
                            <CardBody>
                                <CardTitle>
                                    {this.state.dish.name}
                                </CardTitle>
                                <CardText>
                                    {this.state.dish.description}
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className = "col-12 col-md-5 m-1">
                        <div>
                            <h4>Comments</h4>
                        </div>
                        <div>
                            {this.renderComments(this.state.dish.comments)}
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
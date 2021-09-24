import { Carousel } from "react-bootstrap";
import { Component } from "react";

import SingleComment from "./SingleComment";

class CommentList extends Component {
  state = {
    comments: [],
  };
  fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.id,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjk1ZTJkNTI2MjAwMTViNmRjOWQiLCJpYXQiOjE2Mjk5ODUyMzksImV4cCI6MTYzMTE5NDgzOX0.mS3Qwvrlsn7oJIK8hVVuKRbXkVR6kVchtAJ7C4UySkI",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        this.setState({ comments: comments });
        this.state.comments.forEach((element) => {
          console.log(element.comment);
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount = async () => {
    this.fetchComments();
  };

  render() {
    return (
      <div className="comment-section">
        <h4>Recent comments</h4>
        <div className="comment-carousel">
          <Carousel>
            {this.state.comments.map((comment) => (
              <SingleComment comment={comment} key={comment._id} />
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}
export default CommentList;

import { Carousel } from "react-bootstrap";

const SingleComment = ({ comment, key }) => (
  <Carousel.Item className="comment-carousel-item" key={key}>
    <h2>{comment.comment}</h2>
  </Carousel.Item>
);
export default SingleComment;

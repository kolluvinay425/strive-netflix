import { Component } from "react";
import { Card } from "react-bootstrap";

class SearchResults extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.mov.Poster} />
        <Card.Body>
          <Card.Title style={{ color: "#313438" }}>
            {this.props.mov.Title}
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
export default SearchResults;

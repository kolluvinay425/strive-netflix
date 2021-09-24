import { Component } from "react";
import { Card, Row, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Movies extends Component {
  state = {
    allMovies: null,
  };
  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            onClick={() =>
              this.setState({
                allMovies: this.props.mov,
              })
            }
            variant="top"
            src={this.props.mov.Poster}
          />
          <Card.Body>
            <Link to={"/details/" + this.props.mov.imdbID}>
              <Card.Title style={{ color: "#313438" }}>
                {this.props.mov.Title}
                <p>{this.props.mov.Year}</p>
              </Card.Title>
            </Link>

            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Row>
          {this.state.allMovies && (
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>{this.state.allMovies.Title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>{this.state.allMovies.Year}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
              </Modal.Footer>
            </Modal.Dialog>
          )}
        </Row>
      </>
    );
  }
}
export default Movies;

import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const MyApiMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const GetMovies = async () => {
      const movies = await fetch("http://localhost:3001/netflix/");
      if (movies.ok) {
        const data = await movies.json();
        setMovies(data);
        console.log("dataaaaaaaaaaaaa-------->", data);
      }
    };
    GetMovies();
  }, []);
  return (
    <Container>
      <Row>
        <h1 style={{ color: "white" }}>from my localhost api</h1>
      </Row>
      <Row>
        {movies &&
          movies.map((movie) => (
            <Col lg={3} key={movie.imdbID}>
              <>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    // onClick={() =>
                    //   this.setState({
                    //     allMovies: this.props.mov,
                    //   })
                    // }
                    variant="top"
                    src={movie.imgUrl}
                  />
                  <Card.Body>
                    <Link to={"/details/" + movie.imdbId}>
                      <Card.Title style={{ color: "#313438" }}>
                        {movie.title}
                        <p>{movie.year}</p>
                      </Card.Title>
                    </Link>

                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
                {/* <Row>
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
                </Row> */}
              </>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default MyApiMovies;

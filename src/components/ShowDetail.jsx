import { useState, useEffect } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";

const ShowDetails = ({ match }) => {
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?i=${match.params.ID}&apikey=89bb5edc`
      );
      if (response.ok) {
        let data = await response.json();
        setMovieDetails(data);
        console.log(data);
      } else {
        alert("problem");
      }
    };
    fetchMovieDetails();
  }, []);
  return (
    <>
      {movieDetails && (
        <Container>
          <Row>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={movieDetails.Poster} />
              <Card.Body>
                <Card.Title style={{ color: "black" }}>
                  {movieDetails.Title}
                </Card.Title>
                <Card.Text style={{ color: "black" }}>
                  {movieDetails.Plot}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ShowDetails;

import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Movies from "./Movies";
class Search extends Component {
  state = {
    movies: [],
  };

  componentDidMount = () => {
    this.fetch_movies();
  };
  fetch_movies = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=131a9fa6&s="${this.props.title.toLowerCase()}"&type="movie&page=1"`
    );
    const data = await response.json();

    this.setState({
      movies: data,
    });

    console.log(this.state.Movies);

    console.log("this is data", data.Search);
  };
  render() {
    return (
      <Container>
        <Row>
          <h1 style={{ color: "white" }}>{this.props.title}</h1>
        </Row>
        <Row>
          {this.state.movies.Search &&
            this.state.movies.Search.slice(0, 4).map((movie) => (
              <Col lg={3} key={movie.imdbID}>
                <Movies mov={movie} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}
export default Search;

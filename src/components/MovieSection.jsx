import { Container, Row, Col } from 'react-bootstrap'

const MovieSection = () => {
  return (
    <Container className="container-fluid pl-lg-5 mt-3">
      <Row>
          <h3>Action</h3>
        <div className="d-flex flex-nowrap">
            <Col className="px-1"><img src="https://place-hold.it/341x192" alt="" /></Col>
            <Col className="px-1"><img src="https://place-hold.it/341x192" alt="" /></Col>
            <Col className="px-1"><img src="https://place-hold.it/341x192" alt="" /></Col>
            <Col className="px-1"><img src="https://place-hold.it/341x192" alt="" /></Col>
            <Col className="px-1"><img src="https://place-hold.it/341x192" alt="" /></Col>
            <Col className="px-1"><img src="https://place-hold.it/341x192" alt="" /></Col>
        </div>
      </Row>
    </Container>
  );
};

export default MovieSection
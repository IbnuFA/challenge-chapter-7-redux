import React, { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../../redux/actions/movieAction";

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Card, Nav, Row, Col} from "react-bootstrap";
import "../style/popular.css"

export default function Popular (){
    const dispatch = useDispatch();
    const { movies } = useSelector((state) => state.movie)

    useEffect(() => {
        dispatch(getAllMovies())
    }, [dispatch])

    return(
        <div>
            <Container>
                <Card>
                    <Card.Body>
                        <Nav activeKey="/home">
                            <Nav.Item className="ms-1">
                                <Nav.Link href="/home">Popular Movie</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="ms-auto">
                                <Nav.Link eventKey="link-1">Show More</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Row className="justify-content-between">
                            {movies.results.slice(0, 4).map((result, index) => {
                                return(
                                    <Col md={3} sm={12} key={index}>
                                        <Card className="col-sm-12 cardWrapper">
                                            <Card.Img variant="top" src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt="poster-movie"/>
                                            <Card.Body>
                                                <Card.Title className="text-center">{result.title}</Card.Title>
                                                <Card.Text className="text-left">{result.overview}</Card.Text>
                                                <Card.Text className="text-left">Release Date : {result.release_date}</Card.Text>
                                                <Card.Text className="text-left">Score : {result.vote_average}</Card.Text>
                                                <Button variant="primary">Detail</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
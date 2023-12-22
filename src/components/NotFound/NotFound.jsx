import { Header, Container, Button, Link } from "./NotFound.styled";

const NotFound = () => {

    return (
        <>
          <Container>
              <Header>Please go to the main page</Header>
              <Button>
                <Link to="/">Click here</Link>
                </Button>
          </Container>
        </>
    )
}

export default NotFound;
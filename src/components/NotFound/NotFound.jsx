import { Header, Container, Button } from "./NotFound.styled";

const NotFound = () => {

    return (
        <>
          <Container>
              <Header>Please go to the main page</Header>
              <Button to="/">Click here</Button>
          </Container>
        </>
    )
}

export default NotFound;
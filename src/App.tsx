import styled from "styled-components";
import Header from "./components/Header";

const Container = styled.body`
    font-family: var(--main-font);
`;

function App() {
    return (
        <Container>
            <Header />
        </Container>
    );
}

export default App;
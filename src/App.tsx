import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

const Container = styled.body`
    font-family: var(--main-font);
`;

function App() {
    return (
        <Container>
            <Header />
            <Home />
            <Footer />
        </Container>
    );
}

export default App;
import styled from "styled-components";
import Button from "../Button";
import ServerStatus from "../ServerStatus";
import GameFeatures from "./GameFeatures";
import EventCards from "../EventCards";

const Main = styled.main`
    background-color: var(--black-bg);
    height: 100%;
    color: #fff;
    font-size: 24px;
    display: flex;
    justify-content: center;

    span {
        color: var(--orange);
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70vw;
    gap: 3em;
    margin-top: 3em;

    p {
        width: 60%;
        text-align: justify;
    }
`

export default function Home() {
    return (
        <Main>
            <Container>
                <img src="/arca-colorful-logo.svg" alt="arca logo" width={"72px"}></img>
                <p>Esteja entre os poucos jogadores que tiveram a chance de jogar <span>Monster Hunter Frontier</span> e agora junte-se a nós em nosso servidor. Aqui você encontrará uma comunidade unida e disposta a enfrentar qualquer desafio que o jogo possa oferecer</p>
                <Button bgColor="var(--orange)">Baixar agora</Button>
                <ServerStatus />
                <GameFeatures />
                <EventCards />
            </Container>
        </Main>
    )
}
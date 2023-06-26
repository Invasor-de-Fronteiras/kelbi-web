import styled from "styled-components";

const Container = styled.footer`
    padding: 5em 15vw;
    background-color: var(--gray-bg);
    color: var(--gray);
    display: flex;
    justify-content: space-between;
    align-items: center;

    p, li {
        font-size: 12px;
    }

    p {
        width: 12vw;
        text-align: justify;
    }

    ul {
        list-style-position: inside;
    }

    .center {
        text-align: center;
    }

    h2 {
        color: white;
        padding-bottom: 0.5;
    }
`

const Navigation = styled.nav`
    display: flex;
    gap: 3em;
`

export default function Footer() {
    return (
        <Container>
            <div>
                <p>O banco pode estar afundando, mas pelo menos a fronteira de Monster Hunter Frontier ainda está em pé e pronta para caçar alguns monstros!</p>
                <p className="center">~ Kushi</p>
            </div>
            <Navigation>
                <div>
                    <h2>Navigation</h2>
                    <ul>
                        <li>Home</li>
                        <li>Download</li>
                        <li>Rankings</li>
                        <li>News</li>
                        <li>FAQ</li>
                        <li>Teams</li>
                    </ul>
                </div>
                <img src="/arca-colorful-logo.svg"></img>
            </Navigation>
        </Container>
    )
}
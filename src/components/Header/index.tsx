import styled from "styled-components";
import Button from "../Button";

const HeaderContainer = styled.header`
    padding: 0 3em;
    background-color: var(--orange);
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    color: #FFF;
    font-size: 24px;
    font-weight: 600;

    ul {
        list-style-type: none;
        display: flex;
        gap: 3em;
    }
`

export default function Header() {
    return (
        <HeaderContainer>
            <img src="/arca-colorful-logo.svg"></img>
            <nav>
                <ul>
                    <li>news</li>
                    <li>rankings</li>
                    <li>download</li>
                    <li>faq</li>
                    <li>team</li>
                </ul>
            </nav>
            <Button>Login</Button>
        </HeaderContainer>
    )
}
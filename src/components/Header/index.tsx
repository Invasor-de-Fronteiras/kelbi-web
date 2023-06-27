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

    .hoverBox {
        height: 100px;
        display: flex;
        align-items: center;
    }

    .hoverBox:hover {
        cursor: pointer;
        transition: 50ms;
        transform: scale(1.1);
    }

    li:active .hoverBox {
        color: #e3dede;
    }

    .mediumButton {
        display: none;
    }

    @media (max-width: 1200px) {
        padding: 0 1.5em;
        font-size: 20px;

        .largeButton {
            display: none;
        }

        .mediumButton {
            display: block;
        }
    }

    @media (max-width: 950px) {
        ul {
            gap: 1.5em;
        }
    }
`

export default function Header() {
    return (
        <HeaderContainer>
            <img src="/arca-colorful-logo.svg"></img>
            <nav>
                <ul>
                    <li><div className="hoverBox">news</div></li>
                    <li><div className="hoverBox">rankings</div></li>
                    <li><div className="hoverBox">download</div></li>
                    <li><div className="hoverBox">faq</div></li>
                    <li><div className="hoverBox">team</div></li>
                </ul>
            </nav>
            <div className="largeButton">
                <Button>Login</Button>
            </div>
            <div className="mediumButton">
                <Button fontSize="20px">Login</Button>
            </div>
        </HeaderContainer>
    )
}
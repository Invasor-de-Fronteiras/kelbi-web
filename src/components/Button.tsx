import styled from "styled-components";

const ButtonComponent = styled.button<ButtonProps>`
    background-color: ${({ bgColor }) => bgColor || "var(--gray-bg)"};
    color: white;
    padding: 0.5em 3em;
    border: none;
    border-radius: 10px;
    font-size: ${({ fontSize }) => fontSize || "24px"};
    font-weight: 600;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    
    &:hover {
        filter:brightness(115%);
    }

    &:active {
        filter: brightness(85%);
    }
`

interface ButtonProps {
    children: string;
    bgColor?: string;
    fontSize?: string;
}

export default function Button(props: ButtonProps) {
    return (
        <ButtonComponent { ...props  }>
            {props.children}
        </ButtonComponent>
    )
}
import styled from "styled-components";

const ButtonComponent = styled.button`
    background-color: var(--gray-bg);
    color: white;
    padding: 0.5em 3em;
    border: none;
    border-radius: 10px;
    font-size: 24px;
    font-weight: 600;
`

interface ButtonProps {
    children: string;
}

export default function Button({ children }: ButtonProps) {
    return (
        <ButtonComponent>
            {children}
        </ButtonComponent>
    )
}
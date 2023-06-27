import styled from "styled-components";

const Container = styled.div`
    display: flex;

    div:first-child {
        border-radius: 1em 0 0 1em;
    }

    div:last-child {
        border-radius: 0 1em 1em 0;
    }
`

const Title = styled.h2`
    font-size: 32px;
    text-align: center;
`

const Paragraph = styled.p`
    font-size: 12px;
    width: 100%;
    text-align: center;
    white-space: nowrap;
`

const Box = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: var(--gray-bg);
    padding: 1.5em;
    display: flex;
    flex-direction: column;
    margin: 0 0.1em;
`

export default function ServerStatus() {
    const status = [
        {
            name: "Total Accounts",
            qnt: 2908,
            img: "/globe.svg"
        },
        {
            name: "Total Characters",
            qnt: 4238,
            img: "/heart.svg"
        },
        {
            name: "Total Guilds",
            qnt: 32,
            img: "/castle.svg"
        },
        {
            name: "Peak Online",
            qnt: 2908,
            img: "/peak-online.svg",
        }
    ]

    return (
        <Container>
            {status.map((item) => (
                <Box key={item.name}>
                    <img src={item.img} alt={item.name} height={"32px"}/>
                    <Title>{item.qnt}</Title>
                    <Paragraph>{item.name}</Paragraph>
                </Box>
            ))}
        </Container>
    )
}
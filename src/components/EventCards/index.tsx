import styled from "styled-components";

const Container = styled.section`
    width: 100%;
    padding: 3em 0;
`
    
const TitleContainer = styled.div`
    padding-bottom: 1.5em;

    h2 {
        font-size: 32px;
        font-weight: 500;
        padding-left: 0.2em;
    }

    hr {
        width: 100%;
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid var(--gray);
        margin: 0.2em 0;
        padding: 0;
    }

    @media (max-width: 560px) {
        text-align: center;
    }
`

const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1em;

    @media (max-width: 560px) {

    }
`

const Card = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1em;

    .text {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    h3 {
        font-size: 24px;
        font-weight: 500;
        color: white;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    
    p {
        font-size: 12px;
        font-weight: 500;
        color: var(--gray);
    }

    hr {
        display: none;
    }

    @media (max-width: 760px) {
        h3 {
            font-size: 16px;
        }
    }

    @media (max-width: 560px) {
        flex-direction: column;
        gap: 0.5em;

        h3 {
            font-size: 14px;
            text-align: center;
        }

        .postDate {
            display: none;
        }

        p {
            display: none;
        }

        hr {
            width: 90%;
            display: block;
            height: 1px;
            border: 0;
            border-top: 1px solid var(--gray);
            margin: 0.2em 0;
            padding: 0;
            align-self: center;
        }
    }
`

const ImageExample = styled.div`
    display: block;
    background-color: white;
    height: 124px;
    width: 245px;
    flex-shrink: 0;

    @media (max-width: 560px) {
        align-self: center;
    }
`

export default function EventCards() {
    const exampleList = [
        {
            img: '',
            title: 'Mais uma vez o update 9.2 foi adiado, entenda o porquê!',
            author: 'Ryuzaki',
            postDay: '8',
            postMonth: 'May',
            postYear: '2023'
        },
        {
            img: '',
            title: 'Ataques DDOS. Mito ou realidade?',
            author: 'YuridaTe',
            postDay: '15',
            postMonth: 'June',
            postYear: '2023'
        },
        {
            img: '',
            title: 'Imigrantes de outros servidores devem ter passaporte livre? Entrevista com o pesquisador Pegoretti Pepe!',
            author: 'Vania',
            postDay: '27',
            postMonth: 'June',
            postYear: '2023'
        }
    ]

    return (
        <Container>
            <TitleContainer>
                <h2>News and Events</h2>
                <hr />
            </TitleContainer>
            <CardContainer>
                {exampleList.map((item, index) => (
                    <Card key={index}>
                        <ImageExample />
                        <div className="text">
                            <h3>{item.title}</h3>
                            <h3 className="postDate">{`- ${item.postDay}th ${item.postMonth} ${item.postYear}`}</h3>
                            <p>{`By ${item.author}, ${item.postDay} days ago`}</p>
                        </div>
                        <hr />
                    </Card>
                ))}
            </CardContainer>
        </Container>
    )
}
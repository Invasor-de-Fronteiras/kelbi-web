import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3em;
    margin-top: 2em;

    h2 {
        font-size: 36px;
        font-weight: 600;
        color: white;
    }

    p {
        font-size: 12px;
        color: var(--gray);
        text-align: left;
    }

    @media (max-width: 1280px) {
        h2 {
            font-size: 32px;
            text-align: center;
            margin-bottom: 0.5em;
        }

        p {
            margin: auto;
        }
    }
`

const Card = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    height: 14em;
    
    @media (min-width: 1281px) {
        img {
            max-height: 100%;
        }
    
        & > div:first-child {
            flex-basis: 50%;
            margin: 0 1em 0 0;
        }
    
        & > div:last-child {
            flex-basis: 50%;
            flex-grow: 1;
        }
    
        &.reverse-card {
            flex-direction: row-reverse;
        }
    
        &.reverse-card > div:first-child {
            margin: 0 0 0 1em;
            text-align: end;
        }
    }
    
    @media (max-width: 1280px) {
        flex-direction: column;
        height: auto;

        img {
            width: 100%;
            margin-bottom: 2em;
        }
    }
`

export default function GameFeatures() {
    const features = [
        {
            title: "MONSTROS EXCLUSIVOS",
            text: "Monster Hunter Frontier é conhecido por seus monstros exclusivos, que oferecem desafios emocionantes e únicos para os jogadores enfrentarem. Esses monstros incluem dragões impressionantes, formas avançadas de monstros já conhecidos e até mesmo robôs gigantes. Entre os monstros mais populares estão Baruragaru, Zenith Espinas, Gaoren Nyctea, Espinas Faust e Berukyurosu. Esses monstros são famosos por suas habilidades especiais, ataques poderosos e aparências impressionantes. Enfrentá-los exige estratégia, habilidade e muita paciência. Os jogadores podem esperar enfrentar muitos outros monstros exclusivos do Frontier enquanto exploram suas zonas de caça expansivas e buscam se tornar os melhores caçadores do jogo.",
            img: "/feature-1.svg"
        },
        {
            title: "COMBATE APRIMORADO",
            text: "Monster Hunter Frontier é conhecido por seus monstros exclusivos, que oferecem desafios emocionantes e únicos para os jogadores enfrentarem. Esses monstros incluem dragões impressionantes, formas avançadas de monstros já conhecidos e até mesmo robôs gigantes. Entre os monstros mais populares estão Baruragaru, Zenith Espinas, Gaoren Nyctea, Espinas Faust e Berukyurosu. Esses monstros são famosos por suas habilidades especiais, ataques poderosos e aparências impressionantes. Enfrentá-los exige estratégia, habilidade e muita paciência. Os jogadores podem esperar enfrentar muitos outros monstros exclusivos do Frontier enquanto exploram suas zonas de caça expansivas e buscam se tornar os melhores caçadores do jogo.",
            img: "/feature-2.svg"
        },
        {
            title: "EVENTOS FREQUENTES",
            text: "Monster Hunter Frontier é conhecido por seus monstros exclusivos, que oferecem desafios emocionantes e únicos para os jogadores enfrentarem. Esses monstros incluem dragões impressionantes, formas avançadas de monstros já conhecidos e até mesmo robôs gigantes. Entre os monstros mais populares estão Baruragaru, Zenith Espinas, Gaoren Nyctea, Espinas Faust e Berukyurosu. Esses monstros são famosos por suas habilidades especiais, ataques poderosos e aparências impressionantes. Enfrentá-los exige estratégia, habilidade e muita paciência. Os jogadores podem esperar enfrentar muitos outros monstros exclusivos do Frontier enquanto exploram suas zonas de caça expansivas e buscam se tornar os melhores caçadores do jogo.",
            img: "/feature-3.svg"
        }
    ]

    return (
        <Container>
            {features.map((item, index) => (
                <Card key={item.title} className={index % 2 !== 0 ? 'reverse-card' : ''}>
                    <div>
                        <img src={item.img} alt={item.title}/>
                    </div>
                    <div>
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                    </div>
                </Card>
            ))}
        </Container>
    )
}
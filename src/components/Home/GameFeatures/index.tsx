import styled from "styled-components";

const Container = styled.div`
    width: 80vw;

    h2 {
        font-size: 36px;
        font-weight: 600;
        color: white;
    }

    p {
        font-size: 12px;
        color: var(--gray);
    }
`

const Card = styled.section`
    display: flex;
    align-items: center;
    
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
            {features.map((item) => (
                <Card key={item.title}>
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
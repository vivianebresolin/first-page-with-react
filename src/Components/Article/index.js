import styled from 'styled-components';

const Title = styled.h3`
    font-size: 1.3rem;
    margin: 1rem 0 0.5rem 0;
`
const Text = styled.div`
    width: 50%;  
    background-color: white;     
    padding: 4rem;

    @media (max-width: 1079px){
        padding: 1.5rem;
    };

    @media (max-width: 749px){
        width: 100%;
    };
`

export default function Article(props) {

    const Element = styled.article`
        width: 100%;
        margin: auto;        
        display: flex;
        flex-direction: ${props.reverse ? "row-reverse" : "none"};

        @media (max-width: 1079px){
            max-height: 40vh;
        };

        @media (min-width: 1090px){
            max-width: 95%;
        };

        @media (min-width: 1200px){
            max-width: 90%;
        };

        @media (min-width: 1300px){
            max-width: 85%;
        };

        @media (min-width: 1400px){
            max-width: 75%;
        };

        @media (min-width: 1500px){
            max-width: 70%;
            min-height: 45vh;
        };
        `
    const Image = styled.div`
        width: 50%;
        background: url(${props.url});
        background-size: cover;

        @media (max-width: 749px){
            width: 0;
        };
     `

    return (
        <Element>
            <Text>
                <Title>{props.title}</Title>
                <p>{props.text}</p>
            </Text>
            <Image />
        </Element>
    )
}
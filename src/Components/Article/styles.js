import styled from 'styled-components';

export const Title = styled.h3`
    font-size: 1.3rem;
    margin: 1rem 0 0.5rem 0;
`;

export const Text = styled.div`
    width: 50%;  
    background-color: white;     
    padding: 4rem;

    @media (max-width: 1079px){
        padding: 1.5rem;
    };

    @media (max-width: 749px){
        width: 100%;
    };
`;

export const Element = styled.article`
    width: 100%;
    margin: auto;        
    display: flex;
    flex-direction: ${props => props.reverse ? "row-reverse" : "none"};

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
`;

export const Image = styled.div`
    width: 50%;
    background: url(${props => props.url});
    background-size: cover;

    @media (max-width: 749px){
        width: 0;
    };
`;
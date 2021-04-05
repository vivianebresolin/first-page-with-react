import styled from 'styled-components';

export const ContactDiv = styled.div`
    width: 100%;
    height: 16em;
    background: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.6)), url(${props => props.bgImage});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;        
`;

export const Paragraph = styled.p`
    color: white;
    font-size: 1.6rem;        
`;


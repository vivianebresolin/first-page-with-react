import styled from 'styled-components';

export const HeaderDiv = styled.header`
    width: 100%;
    height: 18em;
    background: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.6)), url(${props => props.bgImage});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;        
`;

export const Paragraph = styled.p`
    color: white;
    font-size: 2rem;        
`;
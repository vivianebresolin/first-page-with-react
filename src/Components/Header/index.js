import styled from 'styled-components';
import backgroundImage from '../../images/sea.jpg';

const HeaderDiv = styled.header`
    width: 100%;
    height: 18em;
    background: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.6)), url(${backgroundImage});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;        
`;

const Paragraph = styled.p`
    color: white;
    font-size: 2rem;        
`;

export default function Header(props) {
    return (
        <HeaderDiv>
            <Paragraph>{props.text}</Paragraph>
        </HeaderDiv>
    )
}
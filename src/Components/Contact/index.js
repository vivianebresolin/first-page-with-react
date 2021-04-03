import styled from 'styled-components';
import backgroundImage from '../../images/sea.jpg';

const ContactDiv = styled.div`
    width: 100%;
    height: 16em;
    background: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.6)), url(${backgroundImage});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;        
`;

const Paragraph = styled.p`
    color: white;
    font-size: 1.6rem;        
`;

export default function Contact(props) {
    return (
        <ContactDiv>
            <Paragraph>{props.text}</Paragraph>
        </ContactDiv>
    )
}
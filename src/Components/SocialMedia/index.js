import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const SocialMediaDiv = styled.div`
    font-size: 1.8rem;
    color: blue;    
    display: flex;
    align-items: center;
    margin-right: 4rem;
`;

const Twitter = styled.div`
    margin: 0 2rem 0 2rem;
`;

export default function SocialMedia() {
    return (
        <SocialMediaDiv>
            <FontAwesomeIcon icon={faFacebook} />
            <Twitter><FontAwesomeIcon icon={faTwitterSquare} /></Twitter>
            <FontAwesomeIcon icon={faInstagram} />
        </SocialMediaDiv>
    )
}
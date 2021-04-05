import { SocialMediaDiv, Twitter } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function SocialMedia() {
    return (
        <SocialMediaDiv>
            <FontAwesomeIcon icon={faFacebook} />
            <Twitter><FontAwesomeIcon icon={faTwitterSquare} /></Twitter>
            <FontAwesomeIcon icon={faInstagram} />
        </SocialMediaDiv>
    )
}
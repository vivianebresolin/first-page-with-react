import styled from 'styled-components';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const SocialMediaDiv = styled.div`
    display: flex;
`

export default function SocialMedia() {
    return (
        <SocialMediaDiv>
            <div id='facebook' icon={faFacebook} />
            <div id='twitter' icon={faTwitterSquare} />
            <div id='instagram' icon={faInstagram} />
        </SocialMediaDiv>
    )
}
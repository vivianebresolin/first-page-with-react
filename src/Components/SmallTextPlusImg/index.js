import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Element = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    text-align: center;
`;

const Title = styled.h3`
    font-size: 1.3rem;
    margin: 1rem 0 0.5rem 0;
`;

export default function SmallTextPlusImg(props) {
    return (
        <Element>
            <FontAwesomeIcon icon={props.icon} size='4x' />
            <Title>{props.title}</Title>
            <p>{props.text}</p>
        </Element>
    )
}
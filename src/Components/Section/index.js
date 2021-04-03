import styled from 'styled-components';
import SmallTextPlusImg from '../SmallTextPlusImg'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { faBuffer } from '@fortawesome/free-brands-svg-icons'

export default function Section() {

    const Div = styled.div`
        width: 100%;
        height: 20em;
        background-color: ghostwhite;
        display: flex;
        align-items: center;
        justify-content: center;
    `

    const Section = styled.section`
        display: flex;
        align-items: center;
        justify-content: space-around;
        min-width: 75%;
        max-width: 90%;        
    `

    return (
        <Div>
            <Section>
                <SmallTextPlusImg
                    icon={faDesktop}
                    title='Somente para desktop'
                    text='Vamos aprender como utilizar um framework.'
                />
                <SmallTextPlusImg
                    icon={faBuffer}
                    title='Criado com componentes'
                    text='Utilizamos o Styled Components.'
                />
                <SmallTextPlusImg
                    icon={faCheckCircle}
                    title='Fácil aproveitamento'
                    text='Estamos no caminho.'
                />
            </Section>
        </Div>
    )
}
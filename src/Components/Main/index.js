import styled from 'styled-components';
import Article from '../Article';
import imgPhone from '../../images/phone.PNG';
import imgCode from '../../images/code.PNG';
import imgChild from '../../images/child.PNG';

const MainDiv = styled.main`
    width: 100%;
    background-color: ghostwhite;
`;

export default function Main() {
    return (
        <MainDiv>
            <Article
                title='Loren'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum cursus ex, 
                      eu tristique urna tincidunt et. Curabitur egestas, velit in finibus tincidunt, nisl 
                      nisl dictum tellus, id placerat tortor orci eu felis. Sed mollis at enim a efficitur. 
                      Cras feugiat vitae sapien eu imperdiet. Fusce lorem metus, accumsan vitae porta non, 
                      tristique vel felis. Nunc ornare, tellus quis porta feugiat, neque lectus tincidunt 
                      augue, ac sodales enim nisi quis est. Cras et leo et tortor convallis porttitor. Nunc 
                      ornare, tellus quis porta feugiat, neque lectus tincidunt augue, ac sodales enim nisi 
                      quis est. Cras et leo et tortor convallis porttitor.'
                url={imgPhone}
            />
            <Article
                title='Loren'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum cursus ex, 
                      eu tristique urna tincidunt et. Curabitur egestas, velit in finibus tincidunt, nisl 
                      nisl dictum tellus, id placerat tortor orci eu felis. Sed mollis at enim a efficitur. 
                      Cras feugiat vitae sapien eu imperdiet. Fusce lorem metus, accumsan vitae porta non, 
                      tristique vel felis. Nunc ornare, tellus quis porta feugiat, neque lectus tincidunt 
                      augue, ac sodales enim nisi quis est. Cras et leo et tortor convallis porttitor. Nunc 
                      ornare, tellus quis porta feugiat, neque lectus tincidunt augue, ac sodales enim nisi 
                      quis est. Cras et leo et tortor convallis porttitor.'
                url={imgCode}
                reverse={true}
            />
            <Article
                title='Loren'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum cursus ex, 
                      eu tristique urna tincidunt et. Curabitur egestas, velit in finibus tincidunt, nisl 
                      nisl dictum tellus, id placerat tortor orci eu felis. Sed mollis at enim a efficitur. 
                      Cras feugiat vitae sapien eu imperdiet. Fusce lorem metus, accumsan vitae porta non, 
                      tristique vel felis. Nunc ornare, tellus quis porta feugiat, neque lectus tincidunt 
                      augue, ac sodales enim nisi quis est. Cras et leo et tortor convallis porttitor. Nunc 
                      ornare, tellus quis porta feugiat, neque lectus tincidunt augue, ac sodales enim nisi 
                      quis est. Cras et leo et tortor convallis porttitor.'
                url={imgChild}
            />
        </MainDiv>
    )
}


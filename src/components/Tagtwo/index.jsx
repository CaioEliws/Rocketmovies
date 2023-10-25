import { Content } from './styles'

export function Tagtwo({ title, ...rest }){
    return(
        <Content {...rest}>
            { title }
        </Content>
    );
}
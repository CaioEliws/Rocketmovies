import { Content, Title, Paragraph, Tag } from './styles';
import { Link } from "react-router-dom";

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { Tagtwo } from '../../components/Tagtwo';

export function Review() {
    return(
        <Content>

            <Title>
                <h1>Interestellar</h1>
                <h2><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar /></h2>
            </Title>

            <Paragraph><p>
                Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma"...    <Link to="/details/1"><strong>Ler Mais</strong></Link>
            </p>
            
            </Paragraph>

            <Tag>
                <Tagtwo title="Ficção Científica"/>
                <Tagtwo title="Drama"/>
                <Tagtwo title="Família"/>
            </Tag>

        </Content>
    );
}
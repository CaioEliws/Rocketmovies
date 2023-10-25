import { Content, Container, NewMovie } from './styles';

import { RiAddFill } from 'react-icons/ri'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button';
import { Review } from '../../components/Review';

export function Home(){
    return(
        <Content>
            <Header />
            
            <main>
                <Container>

                    <section>
                        <h1>Meus Filmes</h1>
                        <NewMovie to="/new"><RiAddFill />Adicionar Filme</NewMovie>
                    </section>

                    <div>
                        <Review />
                        <Review />
                        <Review />
                        <Review />
                    </div>

                </Container>
            </main>


        </Content>
    );
}
import { Content, Form } from './styles'

import { Header } from '../../components/Header';
import { Back } from '../../components/Back';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';


export function New(){
    return(
        <Content>
            
            <Header />

            <Form>
                <Back />
                <h1>Novo Filme</h1>

                <main>
                    <Input placeholder="Título" />
                    <Input placeholder="Sua nota (de 0 a 5)" />
                </main>

                <Textarea placeholder="Observações" />

                <Section title="Marcadores">
                    <div className='tags'>
                        <NoteItem value="React" />
                        <NoteItem isNew placeholder="Novo marcador" />
                    </div>
                </Section>

                <footer>
                    <Button children="Excluir filme"/>
                    <Button children="Salvar alterações"/>
                </footer>
                
            </Form>


        </Content>
    );
}
import { Content, Profile, Logotipo } from "./styles";
import { Link } from "react-router-dom";

import { Input } from '../../components/Input'

export function Header(){
    return(
        <Content>

            <Logotipo to="/">
                <h1>RocketMovies</h1>
            </Logotipo>

            <Input placeholder="Pesquisar pelo título" />

            <Profile>
                <div>
                    <strong>Caio Elias</strong>
                    <Link to="/register">sair</Link>
                </div>

                <Link to="/profile">
                    <img 
                        src="https://github.com/caioeliws.png" 
                        alt="Foto do usuário" 
                    />
                </Link>
            </Profile>


        </Content>
    );
}
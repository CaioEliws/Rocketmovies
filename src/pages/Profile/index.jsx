import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Content, Form, Avatar } from './styles'

import { Back } from '../../components/Back'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
    return(
        <Content>

            <header>
                <Back />
            </header>

            <Form>
                <Avatar>
                    <img 
                        src="https://github.com/caioeliws.png"
                        alt="Foto do usuário" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input 
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input 
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock}
                />

                <Input 
                    placeholder="Nova Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button children="Salvar"/>
            </Form>

        </Content>
    );
}
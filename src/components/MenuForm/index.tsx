
import React from 'react';

import { Container, Navigation, DropboxLogo, Form } from './styles';
import useSideMenu from '../../contexts/sidemenu';

const MenuForm: React.FC = () => {
  const { setActive } = useSideMenu();

  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>
        <button className="action--close" onClick={() => setActive(false)}>
          ✕
        </button>
      </Navigation>

      <Form>
        <span className="title">Registre-se</span>
        <span className="subtitle">preencha o formulário abaixo</span>

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button>Prosseguir</button>

        <span className="terms">
          Esta página está sujeita à Política de privacidade e aos Termos de
          serviço.
        </span>
      </Form>
    </Container>
  );
};

export default MenuForm;
import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButtom,
  SignOutButtomText,
} from './styles';

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode
          value="https://google.com.br"
          size={80}
          backgroundColor="#8b10ae"
          color="#fff"
        />
      </Code>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#fff" />
          <NavText>Me Ajuda</NavText>
        </NavItem>

        <NavItem>
          <Icon name="person-outline" size={20} color="#fff" />
          <NavText>Perfil</NavText>
        </NavItem>

        <NavItem>
          <Icon name="credit-card" size={20} color="#fff" />
          <NavText>Configurar Cartão</NavText>
        </NavItem>

        <NavItem>
          <Icon name="smartphone" size={20} color="#fff" />
          <NavText>Configurações do APP</NavText>
        </NavItem>
      </Nav>
      <SignOutButtom onPress={() => {}}>
        <SignOutButtomText>SAIR DO APP</SignOutButtomText>
      </SignOutButtom>
    </Container>
  );
}

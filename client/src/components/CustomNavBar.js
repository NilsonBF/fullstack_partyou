import React, { Component } from "react"
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse, InputGroup, InputGroupAddon, Input, Button } from "reactstrap"

class CustomNavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: "",
      pw: "",
      loginaux: "",
      pwaux: "",
    }
  }
  handleInput(e, tipo) {
    switch (tipo) {
      case "login":
        this.setState({
          loginaux: e.target.value,
        })
        break
      case "senha":
        this.setState({
          pwaux: e.target.value,
        })
        break

      default:
        break
    }
  }

  handleLogin() {
    this.setState({
      login: this.state.loginaux.trim(),
      pw: this.state.pwaux,
    })
  }

  handleSair() {
    this.setState({
      login: "",
      pw: "",
      loginaux: "",
      ppwauxw: "",
    })
  }

  render() {
    return (
      <div>
        {this.state.login.trim() === "" && (
          <Navbar color='light' light expand='md'>
            <NavbarBrand href='/'>Loja da Atlética</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <InputGroup>
                    <InputGroupAddon addonType='prepend'>Login</InputGroupAddon>
                    <Input placeholder='' value={this.state.loginaux} onChange={e => this.handleInput(e, "login")} />
                  </InputGroup>
                </NavItem>
                <NavItem>
                  <InputGroup>
                    <InputGroupAddon addonType='prepend'>Senha</InputGroupAddon>
                    <Input placeholder='' value={this.state.pwaux} onChange={e => this.handleInput(e, "senha")} />
                  </InputGroup>
                </NavItem>
                <NavItem>
                  <Button color='info' outline onClick={() => this.handleLogin()}>
                    Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        )}
        {this.state.login.trim() === "admin" && (
          <Navbar color='light' light expand='md'>
            <NavbarBrand href='/'>Loja da Atlética</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavbarBrand>Admin</NavbarBrand>
                <NavItem>
                  <NavLink href='/new-produtos/'>Cadsatrar Produtos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/all-pedidos/'>Pedidos</NavLink>
                </NavItem>
                <NavItem>
                  <Button color='warning' onClick={() => this.handleSair()}>
                    Sair
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        )}
        {this.state.login.trim() !== "admin" && this.state.login.trim() !== "" && (
          <Navbar color='light' light expand='md'>
            <NavbarBrand href='/'>Loja da Atlética</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavbarBrand>{this.state.login}</NavbarBrand>
                <NavItem>
                  <NavLink href='/produtos/'>Produtos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/carrinho/'>Carrinho</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/my-pedidos/'>Meus Pedidos</NavLink>
                </NavItem>
                <NavItem>
                  <Button color='warning' onClick={() => this.handleSair()}>
                    Sair
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        )}
      </div>
    )
  }
}

export default CustomNavBar

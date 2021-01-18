import React, { Component } from 'react';
import './App.css';

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];


class App extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.fixAddres = this.fixAddress.bind(this)
    this.handleOnBlur = this.handleOnBlur.bind(this)
    this.state = {
      nome: '',
      email: '',
      CPF: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipoAP: ''
    };


  }
  handleChange({ target }) {
    let { name } = target;
    let value = target.type === 'checkbox' ? target.checked : target.value

    if (name === 'nome') value = value.toUpperCase()

    if (name === 'endereco') value = this.fixAddress(value)

    this.setState({
      [name]: value
    });
  }
  fixAddress = address => address.replace(/[^\w\s]/gi, '')

  handleOnBlur({ target }) {
    let { name } = target;
    let value = target.value;

    if (name === 'cidade') value = value.match(/^\d/) ? '' : value;

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <label>Nome
              <input
                type="name"
                name="nome"
                maxLength="40"
                required
                value={this.state.nome}
                onChange={this.handleChange}
              />
            </label>
            <label>Email
                <input
                type="email"
                name="email"
                maxLength="50"
                required
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
            <label>CPF
              <input
                type='text'
                name='CPF'
                maxLength='11'
                required
                value={this.state.CPF}
                onChange={this.handleChange}
              />
            </label>
            <label>Endereço
              <input
                type='text'
                name='endereco'
                maxLength='200'
                required
                value={this.state.endereco}
                onChange={this.handleChange}
              />
            </label>
            <label>Cidade
              <input
                type='text'
                name='cidade'
                maxLength='28'
                required
                value={this.state.cidade}
                onBlur={this.handleOnBlur}
                onChange={this.handleChange}
              />
            </label>
            <label>Estado
              <select
                name='estado'
                required
                value={this.state.estado}
                onChange={this.handleChange}
              >
                {states.map((value, key) =>
                  <option key={key}>{value}</option>)}
              </select>
            </label>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default App;

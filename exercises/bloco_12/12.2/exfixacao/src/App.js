import React from 'react';
import logo from './logo.svg';
import './App.css';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: '',
      nome: '',
      check: '',
      arquivo: '',
    };
  }


  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Form em React</h1>
        <form className='form'>
          <fieldset>
            <input
              type="text"
              name="nome"
              value={this.state.nome}
              onChange={this.handleChange}
            />
            <input
              type="number"
              name="idade"
              value={this.state.idade}
              onChange={this.handleChange}
            />
          </fieldset>
          <input
            type='checkbox'
            name='check'
            value={this.state.check}
            onChange={this.handleChange}
          />
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea
              name="estadoFavorito"
              value={this.state.estadoFavorito}
              onChange={this.handleChange} />
          </label>
          <input
            type='file'
            name='arquivo'
            value={this.state.arquivo}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default Form;

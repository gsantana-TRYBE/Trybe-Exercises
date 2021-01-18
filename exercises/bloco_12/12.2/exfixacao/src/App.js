import React from 'react';
import TextArea from './TextArea';

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
          <TextArea evalue={this.state.estadoFavorito} handleChange={this.handleChange} />
          < input
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

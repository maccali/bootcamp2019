import React, { Component } from 'react';

class TechList extends Component {

    state = {
        newTech: '',
        techs: [
            'Node.js',
            'RactJS',
            'React Native',
        ]
    }

    handleInputChange = e => {
        this.setState({ newTech: e.target.value })
    }

    handleSubmmit = e => {
        e.preventDefault();
        this.setState({
            techs: [... this.state.techs, this.state.newTech],
            newTech: '',
        })
    }

    handleDelete = (tech) => {
        console.log(tech);
        this.setState({
            techs: this.state.techs.filter(t => t !== tech)
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmmit}>
                    <h1>{this.state.newTech}</h1>
                    <ul>
                        {this.state.techs.map(tech => (
                            <li key={tech}>
                                {tech}
                                <button
                                    type="button"
                                    onClick={() => this.handleDelete(tech)}>
                                    Remover
                                </button>
                            </li>
                        ))}
                    </ul>
                    <input
                        type="text"
                        onChange={this.handleInputChange}
                        value={this.state.newTech}
                    />
                    <button type="submit">Enviar</button>
                </form>
            </>
        )
    }
}

export default TechList;
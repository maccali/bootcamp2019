import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {

    state = {
        newTech: '',
        techs: []
    }

    // Excutado assim que o componente aparece em tela
    componentWillMount() {
        const techs = localStorage.getItem('techs');

        if (techs) {
            this.setState({
                techs: JSON.parse(techs)
            })
        }
    }

    // Executado sempre que ouver alteraçoes nas props os nos estados
    componentDidUpdate(prevProps, prevState) {
        //this.props, this.state

        if (prevState.tech !== this.state.techs) {
            localStorage.setItem('techs', JSON.stringify(this.state.techs));
        }
    }

    // executado quando o componente deixa de existir
    componentWillUnmount() {

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
                            <TechItem
                                key={tech}
                                tech={tech}
                                onDelete={() => this.handleDelete(tech)}
                            />
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
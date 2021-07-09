import React, { Component } from 'react';
import Header from './HeaderComponent';
import Directory from './DirectoryComponent';
import CoasterInfo from './CoasterInfoComponent';
import { COASTERS } from '../shared/coasters';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coasters: COASTERS,
            selectedCoaster: null
        };
    }

    onCoasterSelect(coasterId) {
        this.setState({ selectedCoaster: coasterId });
    }

    render() {
        return (
            <div>
                <Header />
                <Directory coasters={this.state.coasters} onClick={coasterId => this.onCoasterSelect(coasterId)} />
                <CoasterInfo coaster={this.state.coasters.filter(coaster => coaster.id === this.state.selectedCoaster)[0]} />
            </div>
        );
    };
}

export default Main;
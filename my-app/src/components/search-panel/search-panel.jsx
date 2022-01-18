import React, { Component } from 'react';
import './search-panel.scss';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foundPerson: ''
        }
    }

    render() {
        
        const {addedTerm} = this.props;

        const findPerson = (value) => {
            this.setState(({
                foundPerson: value
            }))
            addedTerm(value)
        };

        return (
            <div>
                <input type={'text'} onChange={(e) => { findPerson(e.target.value)}}
                    className='form-control search-input' 
                    placeholder='Найти сотрудника' 
                    value={this.state.foundPerson}/>
            </div>
        );
    }
}

export default SearchPanel;

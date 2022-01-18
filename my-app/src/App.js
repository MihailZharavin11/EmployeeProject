import React, { Component } from 'react';
import AppInfo from './components/app-info/App-info';
import SearchPanel from './components/search-panel/search-panel';
import './components/search-panel/search-panel.scss';
import AppFilter from './components/app-filter/App-filter';
import EmployeesList from './components/employees-list/employees-list';
import EmployeesAddForm from './components/employees-add-form/employees-add-form';
import './App.css';
import nextId from "react-id-generator";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: nextId(),
          name: 'D.Rose',
          salary: 3000,
          increase: false,
          promotion: false
        },
        {
          id: nextId(),
          name: 'K.Irving',
          salary: 5000,
          increase: false,
          promotion: false
        },
        {
          id: nextId(),
          name: 'S.Curry',
          salary: 6000,
          increase: false,
          promotion: false
        }
      ],
      term: '',
      filter: 'all'

    }
  }

  render() {

    const onDeleteItem = (id) => {
      this.setState(({ data }) => ({
        data: data.filter(item => item.id !== id)
      }))
    };


    const addedNewItem = (name, salary) => {
      const newItem = {
        name,
        salary,
        id: nextId()
      }
      if (name && salary) {
        this.setState(({ data }) => ({
          data: data.concat(newItem)
        }))
      }
    };

    const onToggle = (id, onToggleProp) => {
      this.setState(({ data }) => ({
        data: data.map((item) => {
          if (item.id === id) {
            return { ...item, [onToggleProp]: !item[onToggleProp] }
          }
          return item
        })
      }))
    };

    const addedTerm = (term) => {
      this.setState({
        term
      })
    }

    const addedFilter = (filter) => {
      this.setState({
        filter
      })
    }

    const searchFromList = (data, term) => {
      if (term.length === 0) {
        return data;
      }
      return data.filter((item) => {
        return item.name.toLowerCase().includes(term.toLowerCase());
      })

    }

    const searchPeopleByChoice = (data, filter) => {
      switch (filter) {
        case 'all':
          return data
        case 'promotion':
          return data.filter((item) => item.promotion)
        case 'moreThen1000':
          return data.filter((item) => item.salary > 1000)
        default:
          return data
      }
    }




    let countIncrease = this.state.data.filter(item => item.increase).length;
    let countEmployees = this.state.data.length;
    let filter = this.state.filter;
    let dataFiltred = searchPeopleByChoice(searchFromList(this.state.data, this.state.term), filter);


    return (
      <div className="App">
        <AppInfo countIncrease={countIncrease} countEmployees={countEmployees} />
        <div className='search-panel'>
          <SearchPanel addedTerm={addedTerm} />
          <AppFilter addedFilter={addedFilter} filter = {filter} />
        </div>
        <EmployeesList  onToggle={onToggle} onDeleteItem={onDeleteItem} data={dataFiltred} />
        <EmployeesAddForm addedNewItem={addedNewItem} />

      </div>
    );
  }
}

export default App;

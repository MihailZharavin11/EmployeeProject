import { Component } from 'react';
import './employees-add-form.scss';

class EmployeesAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }


    render(){
        const {name,salary}=this.state;
        const {addedNewItem} = this.props;


        const changeValue = (nameAtribute,value)=>{
            this.setState({
                [nameAtribute]:value
            })
        }

        
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name = 'name'
                        onChange={(e)=>changeValue(e.target.name,e.target.value)}
                        value={name} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name = 'salary'
                        onChange={(e)=>changeValue(e.target.name,e.target.value)}
                        value={salary} />
    
                    <button onClick={(e)=>{
                        e.preventDefault();
                        addedNewItem(name,salary)
                    }} type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;

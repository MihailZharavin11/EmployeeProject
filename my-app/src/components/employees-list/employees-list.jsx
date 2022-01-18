import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.scss';

const EmployeesList = ({data,onDeleteItem,onToggle}) => {

    const elements = data.map((item)=>{
        const {id ,...itemProps} = item;
        return <EmployeesListItem onToggle={(e)=>{onToggle(id,e.currentTarget.getAttribute('data-toggle'))}} onDeleteItem={()=>onDeleteItem(id)} id={id} key={id} {...itemProps} />
    });

    return (
        <ul className="app-list list-group">
            {
                elements
            }
        </ul>
    )
}

export default EmployeesList;
import './employees-list-item.scss';

const EmployeesListItem = (props) => {

    const { name, salary, onDeleteItem,increase,promotion,onToggle} = props;

    return (
        <li className={`list-group-item d-flex justify-content-between ${increase ? 'increase' : null}
                             ${promotion ? 'like' : null}`}>
            <span onClick={onToggle} data-toggle='promotion' className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    data-toggle='increase'
                    onClick={onToggle}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm"
                    onClick={onDeleteItem}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;
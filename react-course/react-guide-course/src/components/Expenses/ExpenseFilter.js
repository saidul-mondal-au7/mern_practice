import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
    const onChangeHandler = (event) => {
       const inputData = event.target.value
        props.yearData(inputData)
    }
    return (
        <div  className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter Year</label>
                <select value={props.props} onChange={onChangeHandler}>
                    <option  value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;
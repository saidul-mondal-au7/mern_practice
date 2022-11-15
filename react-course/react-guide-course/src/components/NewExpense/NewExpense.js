import React, {useState} from 'react'
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
const NewExpense = (props) => {

    const [toggoleState, setToggoleState] = useState(true)

    const addDataFromChild = (childData) => {
        const expenseData = {
            ...childData,
            id: Math.random.toString()
        }

        props.finalData(expenseData)
    }

    const toggleHandler = () => {
        setToggoleState(false)
    }
    const cancelHandler = () => {
        setToggoleState(true)
    }
    return (
        <div className="new-expense">
            {toggoleState ? (<button onClick={toggleHandler}>Add New Expense</button>) :
           ( <ExpenseForm  cancelProps={cancelHandler}  getData={addDataFromChild}/>)}
        </div>
    )
}

export default NewExpense;
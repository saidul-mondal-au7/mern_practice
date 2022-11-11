import React, {useState} from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enterTitle, setEnterTitle] = useState('')
    const [enterAmount, setEnterAmount] = useState('')
    const [enterDate, setEnterDate] = useState('')

    const titleChangeHandler = (event) => {
       setEnterTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnterAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnterDate(event.target.value)
    }
    const formHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate)
        }

        props.getData(expenseData)
        setEnterTitle('')
        setEnterAmount('')
        setEnterDate('')

    }
    return (
        <form onSubmit={formHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enterTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enterAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enterDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
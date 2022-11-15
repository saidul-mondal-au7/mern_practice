import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import './Expenses.css'

import ExpenseFilter from "./ExpenseFilter";

function Expenses (props) {
    const [yearState, setYearState] = useState('2020')

    const yearDataHandler = (filterYear) => {
        setYearState(filterYear)
        console.log(yearState)
    }
    const filterAccordingtoYear = props.items.filter(item => item.date.getFullYear().toString() === yearState)
   
    let conditionalExpense = <p>No Expense Found</p>
    if (filterAccordingtoYear.length > 0){
        conditionalExpense = filterAccordingtoYear.map(item => <ExpenseItem 
            key = {item.id}
            title={item.title} 
            amount={item.amount} 
            date={item.date}
            />)
    }

    return (
        <Card className="expenses">
            <ExpenseFilter props={yearState} yearData={yearDataHandler}/>
           
        {conditionalExpense}
      </Card>
    )
}

export default Expenses;
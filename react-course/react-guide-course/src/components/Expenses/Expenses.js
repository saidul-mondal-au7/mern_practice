import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import './Expenses.css'

import ExpenseFilter from "./ExpenseFilter";

function Expenses (props) {
    const [yearState, setYearState] = useState('2021')
    const yearDataHandler = (filterYear) => {
        setYearState(filterYear)
        console.log(yearState)
    }
    return (
        <Card className="expenses">
            <ExpenseFilter props={yearState} yearData={yearDataHandler}/>
        <ExpenseItem 
            title={props.items[0].title} 
            amount={props.items[0].amount} 
            date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem 
            title={props.items[1].title} 
            amount={props.items[1].amount} 
            date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem 
            title={props.items[2].title} 
            amount={props.items[2].amount} 
            date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem 
            title={props.items[3].title} 
            amount={props.items[3].amount} 
            date={props.items[3].date}
        ></ExpenseItem>
      </Card>
    )
}

export default Expenses;
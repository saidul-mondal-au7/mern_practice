import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
const NewExpense = (props) => {

    const addDataFromChild = (childData) => {
        const expenseData = {
            ...childData,
            id: Math.random.toString()
        }

        props.finalData(expenseData)
    }
    return (
        <div className="new-expense">
            <ExpenseForm  getData={addDataFromChild}/>
        </div>
    )
}

export default NewExpense;
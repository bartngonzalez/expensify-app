import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './expense_list_item.js';
import { getVisibleExpenses } from '../selectors/expenses.js';

const ExpenseList = (props) => (
	<div>
		{
			props.expenses.length == 0 ? (
				<p>No expenses</p>
			) : (
				props.expenses.map((expense) => {
					return <ExpenseListItem key={expense.id} {...expense} />;
				})
			)
		}
	</div>
);

const mapStateToProps = (state) => {
	return {
		expenses: getVisibleExpenses(state.expenses, state.filters)
	};
};

export default connect(mapStateToProps)(ExpenseList);
export { ExpenseList };

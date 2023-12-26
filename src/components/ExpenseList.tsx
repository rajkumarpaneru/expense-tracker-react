interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((item) => (
          <tr key={item.id}>
            <td>{item.description}</td>
            <td>${item.amount}</td>
            <td>{item.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <td>Total</td>
          <td>
            $
            {expenses.reduce((sum, expense) => {
              return sum + expense.amount;
            }, 0)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExpenseList;

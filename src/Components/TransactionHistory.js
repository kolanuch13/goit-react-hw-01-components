import PropTypes from 'prop-types';

const TransactionHistory = (data) => {
  return (
    <table className="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

          <tbody>
            {data.items.map(item => (
                <tr key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>    
            ))}
        </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(
        ({
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }),
    )),
}

export default TransactionHistory;
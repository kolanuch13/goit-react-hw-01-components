import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = (data) => {
  return (
    <section>
        <div className={css.transactionWrapper}>
            <table className={css.transactionHistory}>
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
        </div>
    </section>
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
import PropTypes from 'prop-types';
import {
  TransactionTable,
  TableItemList,
  TableHeadItem,
  TableItem,
} from './transactionhistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </tr>
      </thead>

      <tbody>
        {items.map(transaction => (
          <TableItemList key={transaction.id}>
            <TableItem>{transaction.type}</TableItem>
            <TableItem>{transaction.amount}</TableItem>
            <TableItem>{transaction.currency}</TableItem>
          </TableItemList>
        ))}
      </tbody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

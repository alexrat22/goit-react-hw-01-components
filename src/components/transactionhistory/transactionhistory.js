import PropTypes from "prop-types";
import {
  TransactionTable,
  TableItemList,
  TableHeadItem,
  TableItem,
} from "./transactionhistory.styled";

function TransactionHistory({ items }) {
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
        {items.map((transaction) => (
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
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;

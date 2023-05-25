import styled from "@emotion/styled";

export const TransactionTable = styled.table`
  width: 500px;
  text-align: center;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 5px 5px 6px rgba(46, 47, 66, 0.08),
    5px 3px 3px rgba(46, 47, 66, 0.16), 0 2px 1px rgba(46, 47, 66, 0.08);
`;

export const TableHeadItem = styled.th`
  font-size: 12px;
  text-transform: uppercase;
  color: #fff;
  background-color: rgb(76, 201, 201);
  padding: 10px 0;

  :first-of-type {
    border-top-left-radius: 8px;
  }

  :last-of-type {
    border-top-right-radius: 8px;
  }
`;

export const TableItemList = styled.tr`
  :nth-of-type(2n) {
    background-color: rgb(238, 234, 234);
  }
`;

export const TableItem = styled.td`
  font-size: 12px;
  text-transform: capitalize;
  padding: 10px 0;
  color: rgb(150, 150, 150);
`;

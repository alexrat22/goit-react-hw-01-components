import styled from "@emotion/styled";
import { getQueriesForElement } from "@testing-library/react";

export const FriendItem = styled.li`
  display: flex;
  padding: 10px 0;
  border-radius: 8px;
  background-color: rgb(238, 234, 234);
  box-shadow: 5px 5px 6px rgba(46, 47, 66, 0.08),
    5px 3px 3px rgba(46, 47, 66, 0.16), 0 2px 1px rgba(46, 47, 66, 0.08);

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const FriendStatus = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 15px;
  background-color: ${(props) => {
    if (props.isOnline) {
      return "green";
    } else return "red";
  }};
`;

export const FriendAvatar = styled.img`
  width: 70px;
  margin-left: 15px;
  border-radius: 8px;
  background-color: #fff;
`;

export const FriendName = styled.p`
  font-size: 24px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 15px;
`;

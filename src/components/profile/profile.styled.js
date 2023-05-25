import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  text-align: center;
  border-radius: 8px;
  background-color: rgb(238, 234, 234);
  box-shadow: 5px 5px 6px rgba(46, 47, 66, 0.08),
    5px 3px 3px rgba(46, 47, 66, 0.16), 0 2px 1px rgba(46, 47, 66, 0.08);
`;

export const UserInfoContainer = styled.div`
  padding-bottom: 40px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #fff;
`;

export const ProfileAvatar = styled.img`
  margin-top: 30px;
  width: 120px;
  border-radius: 50%;
  background-color: rgb(238, 234, 234);
  box-shadow: 5px 5px 6px rgba(46, 47, 66, 0.08),
    5px 3px 3px rgba(46, 47, 66, 0.16), 0 2px 1px rgba(46, 47, 66, 0.08);
`;

export const ProfileName = styled.p`
  font-weight: 700;
  margin-top: 30px;
  font-size: 24px;
`;

export const ProfileTag = styled.p`
  margin-top: 15px;
  margin-bottom: 15px;
  color: rgb(150, 150, 150);
`;

export const ProfileLocation = styled.p`
  font-weight: 700;
  color: rgb(150, 150, 150);
`;

export const ProfileStats = styled.ul`
  display: flex;
`;

export const ProfileStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: center;
  padding: 15px 0;
  border-top: 2px solid rgb(199, 196, 196);

  :first-of-type {
    border-right: 2px solid rgb(199, 196, 196);
  }

  :last-of-type {
    border-left: 2px solid rgb(199, 196, 196);
  }
`;

export const ProfileStatsLabel = styled.span`
  color: rgb(150, 150, 150);
  margin-bottom: 10px;
`;

export const ProfileStatsQuantity = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

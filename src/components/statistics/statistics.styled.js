import styled from '@emotion/styled';
import getRandomHexColor from '../../randomcolor';

export const StatisticsSection = styled.section`
  width: 500px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  background-color: rgb(238, 234, 234);
  box-shadow: 5px 5px 6px rgba(46, 47, 66, 0.08),
    5px 3px 3px rgba(46, 47, 66, 0.16), 0 2px 1px rgba(46, 47, 66, 0.08);
`;

export const StatisticsTitle = styled.h2`
  padding-top: 20px;
  text-align: center;
  text-transform: uppercase;
  color: rgb(150, 150, 150);
`;

export const StatisticsList = styled.ul`
  margin-top: 20px;
  display: flex;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: center;
  padding: 5px 0;
  background-color: ${getRandomHexColor};

  :first-of-type {
    border-bottom-left-radius: 8px;
  }

  :last-of-type {
    border-bottom-right-radius: 8px;
  }
`;

export const StatisticsLabel = styled.span`
  color: #fff;
`;

export const StatisticsPercentage = styled.span`
  font-size: 24px;
  font-weight: 700;
  margin-top: 10px;
  color: #fff;
`;

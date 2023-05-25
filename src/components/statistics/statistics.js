import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPercentage,
} from './statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle> {title}</StatisticsTitle>}
      <StatisticsList>
        {stats.map(item => (
          <StatisticsItem key={item.id}>
            <StatisticsLabel>{item.label}</StatisticsLabel>
            <StatisticsPercentage>{item.percentage}%</StatisticsPercentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsStatList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPercentage,
} from './statistics.styled';

function Statistics({ title, stats }) {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle> {title}</StatisticsTitle>}
      <StatisticsStatList>
        {stats.map(item => (
          <StatisticsItem key={item.id}>
            <StatisticsLabel>{item.label}</StatisticsLabel>
            <StatisticsPercentage>{item.percentage}%</StatisticsPercentage>
          </StatisticsItem>
        ))}
      </StatisticsStatList>
    </StatisticsSection>
  );
}

export default Statistics;

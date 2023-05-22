import { StatisticsList, StatisticsData } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <li>
        <StatisticsData>Good: {good}</StatisticsData>
      </li>
      <li>
        <StatisticsData>Neutral: {neutral}</StatisticsData>
      </li>
      <li>
        <StatisticsData>Bad: {bad}</StatisticsData>
      </li>
      <li>
        <StatisticsData>Total: {total}</StatisticsData>
      </li>
      <li>
        <StatisticsData>
          Positive feedback: {positivePercentage} %
        </StatisticsData>
      </li>
    </StatisticsList>
  );
};

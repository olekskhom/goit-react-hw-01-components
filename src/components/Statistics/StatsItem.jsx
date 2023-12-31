import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomHexColor } from 'utilits/getRandomColor';

export default function StatsItem({ label, percentage }) {
  return (
    <li
      className={css.item}
      style={{
        backgroundColor: getRandomHexColor(),
      }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
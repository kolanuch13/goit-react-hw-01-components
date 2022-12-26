import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';
import css from './Statistic.module.css';

const Statistic = ({ title, data }) => {
  return (
    <section>
      <div className={css.statistic}>
          {title.length > 0 && (
            <h2 className="title">{title}</h2>
          )}
          <ul className={css.statList}>
            <StatisticItem elements={data} />
          </ul>
      </div>
    </section>
  )
}

Statistic.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Statistic;
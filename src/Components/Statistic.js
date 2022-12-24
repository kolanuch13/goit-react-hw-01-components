import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from '../styles/Statistic.module.css';

const Statistic = ({ title, children }) => {
  return (
    <section>
      <div className={clsx(css.statistic)}>
          <h2 className="title">{title}</h2>
          <ul className={clsx(css.statList)}>
              {children}
          </ul>
      </div>
    </section>
  )
}

Statistic.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Statistic;
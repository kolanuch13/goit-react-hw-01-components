import PropTypes from 'prop-types';

const Statistic = ({ title, children }) => {
  return (
    <section className="statistics">
        <h2 className="title">{title}</h2>

        <ul className="stat-list">
            {children}
        </ul>
    </section>
  )
}

Statistic.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Statistic;
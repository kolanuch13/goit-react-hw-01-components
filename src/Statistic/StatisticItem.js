import PropTypes from 'prop-types';
import css from './Statistic.module.css';

const StatisticItem = ({ element }) => {
    return (
        <li className={css.item}>
            <span className={css.label}>{element.label}</span>
            <figure className={css.char} >
                <span className="percentage">{element.percentage}%</span>
                <svg width="120px" height="120px">
                    <circle style={{strokeDashoffset: `calc((${element.percentage}*283)/100)`}} className={css.circle} cx="140" cy="50" r="45" transform="rotate(-90, 95, 95)"></circle>
                </svg>
            </figure>
        </li>      
    );
}

StatisticItem.propTypes = {
    element: PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        },
    ),
};

export default StatisticItem;
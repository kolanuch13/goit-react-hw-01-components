import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './Statistic.module.css';

const StatisticItem = ({ elements }) => {
    return (
        elements.map(element => (
            <li className={clsx(css.item)} key={element.id}>
                <span className={clsx(css.label)}>{element.label}</span>
                <figure className={clsx(css.char)} >
                    <span className="percentage">{element.percentage}%</span>
                    <svg width="120px" height="120px">
                        <circle style={{strokeDashoffset: `calc((${element.percentage}*283)/100)`}} className={clsx(css.circle)} cx="140" cy="50" r="45" transform="rotate(-90, 95, 95)"></circle>
                    </svg>
                </figure>
            </li>      
        ))
  );
}

StatisticItem.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.shape(
        ({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    )),
};

export default StatisticItem;
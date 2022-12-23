import PropTypes from 'prop-types';

const Elements = ({ elements }) => {
    return (
        elements.map(element => (
            <li className="item" key={element.id}>
                <span className="label">{element.label}</span>
                <span className="percentage">{element.percentage}%</span>
            </li>      
        ))
  );
}

Elements.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.shape(
        ({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    )),
};

export default Elements;
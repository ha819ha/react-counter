import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({onIncrement, onDecrement, onSetColor, color, number, index}) => {
    return (
      <div className="Counter"
        onClick={() => onIncrement(index)}
        onContextMenu={
          (e) => { e.preventDefault(); onDecrement(index); }
        }
        onDoubleClick={() => onSetColor(index)}
        style={{backgroundColor: color}}>
        {number}
      </div>
    );
}

Counter.propTypes = {
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func,
  color: PropTypes.string,
  index: PropTypes.number,
  number: PropTypes.number
}
Counter.defaultProps = {
  onIncrement: () => console.warn('onIncrement not defined'),
  onDecrement: () => console.warn('onIncrement not defined'),
  onSetColor: () => console.warn('onIncrement not defined'),
  index: 0,
  number: 0,
  color: 'black'
}

export default Counter;

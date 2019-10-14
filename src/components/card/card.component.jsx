import React from 'react';
import PropTypes from 'prop-types';
import './card.styles.css';

// export default class Card extends Component {
//   render() {
//     return (
//       <div className="card-container">
//         <img
//           alt="monster"
//           src={`https://robohash.org/${this.props.monster.id}?set=set2&size=180x180`}
//         />
//         <h2>{this.props.monster.name}</h2>
//         <p>{this.props.monster.email}</p>
//       </div>
//     );
//   }
// }

const Card = props => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};

export default Card;

Card.propTypes = { monster: PropTypes.object };

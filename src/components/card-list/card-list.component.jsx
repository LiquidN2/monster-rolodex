import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card.component';
import './card-list.styles.css';

// export default class CardList extends Component {
//   render() {
//     return (
//       <div className="card-list">
//         {this.props.monsters.map(monster => {
//           return <Card key={monster.id} monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;

CardList.propTypes = { monsters: PropTypes.array };

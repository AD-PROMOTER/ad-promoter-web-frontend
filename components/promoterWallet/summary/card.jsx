import Image from 'next/image';
import { CardStyles } from '../styles/summary';

const Card = (props) => {
  return (
    <CardStyles bg={props.bg} shadow={props.shadow}>
      <div className="header">
        <Image src={props.img} alt="Money Icon" />
        <p>{props.text}</p>
      </div>
      <div className="amount">&#8358;{props.amount}</div>
    </CardStyles>
  );
};

export default Card;

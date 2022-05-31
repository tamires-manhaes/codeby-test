import { FunctionComponent } from 'react';
import FreeShippingTag from '../FreeShippingTag';
import { Total } from './styles';

interface ITotalBox {
  value: number;
}

const TotalBox: FunctionComponent<ITotalBox> = ({ value }) => {
  let totalValue = value > 1000 ? 2 : 1;
  let formatedTotalValue = `${value.toString().slice(0, totalValue)},${value
    .toString()
    .slice(-2)}`;
  console.log(value);
  return (
    <Total>
      <div className="valuesBox">
        <span>Total</span>
        <span>R${formatedTotalValue}</span>
      </div>
      {value > 1000 ? <FreeShippingTag /> : <></>}
    </Total>
  );
};

export default TotalBox;

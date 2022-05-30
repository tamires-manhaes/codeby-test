import { FunctionComponent } from 'react';
import FreeShippingTag from '../FreeShippingTag';
import { Total } from './styles';

interface ITotalBox {
  value: number;
}

const TotalBox: FunctionComponent<ITotalBox> = ({ value }) => {
  console.log(
    value.toLocaleString('pt-BR', {
      signDisplay: 'exceptZero',
      unitDisplay: 'long',
    })
  );
  return (
    <Total>
      <div className="valuesBox">
        <span>Total</span>
        <span>R${value.toString().split(',')}</span>
      </div>
      {value > 1000 ? <FreeShippingTag /> : <></>}
    </Total>
  );
};

export default TotalBox;

import { FunctionComponent, MouseEventHandler } from 'react';
import TotalBox from '../TotalBox';
import { Ft } from './styles';

interface IFooter {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Footer: FunctionComponent<IFooter> = ({ onClick }) => {
  return (
    <Ft>
      <div>
        <button onClick={onClick}>
          <span>Finalizar compra</span>
        </button>
      </div>
    </Ft>
  );
};

export default Footer;

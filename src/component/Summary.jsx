import { useState } from 'react';
import './summary.css';

function Summary({ subtotal }) {
  const [discount, setDiscount] = useState([]);
  const [tax, setTax] = useState([]);
  const [ship, setShip] = useState(0);
  const [paid, setPaid] = useState(0);

  const discountvalue = [0, 2, 5, 10, 15];
  const taxvalue = [0, 2, 5, 10, 15];
  const discountamount = (subtotal * discount) / 100;
  const afterDiscount = subtotal - discountamount;
  const taxamount = (subtotal * tax) / 100;

  const total =
    parseFloat(afterDiscount) + parseFloat(taxamount) + parseFloat(ship);

  const balanceDeu = total - paid;

  return (
    <div className="summary">
      <div className="note">
        <div className="notes">
          <h5>Notes</h5>
          <p>Notes - any relevent information not alredy coverd</p>
        </div>
        <div className="notes2">
          <h5>Terms</h5>
          <p>
            Terms and conditions - late fees, payment methods,delevery scedule
          </p>
        </div>
      </div>
      <div className="details">
        <span>
          Subtotal <b>$ {subtotal.toFixed(2)}</b>
        </span>
        <span>
          Discount
          <select
            onChange={(e) => setDiscount([e.target.value])}
            value={discount}
          >
            {discountvalue.map((discountvalue) => (
              <option>{discountvalue}</option>
            ))}
          </select>
        </span>
        <span>
          Tax
          <select onChange={(e) => setTax([e.target.value])} value={tax}>
            {taxvalue.map((taxvalue) => (
              <option>{taxvalue}</option>
            ))}
          </select>
        </span>
        <span>
          Shipping
          <input
            type="number"
            value={parseFloat(ship)}
            onChange={(e) => setShip(e.target.value)}
          />
        </span>

        <span>
          Total <b>$ {total.toFixed(2)}</b>
        </span>
        <span>
          Amount Paid
          <input
            type="number"
            value={parseFloat(paid)}
            onChange={(e) => setPaid(e.target.value)}
          />
        </span>
        <span>
          Balance Due<b>$ {balanceDeu.toFixed(2)}</b>
        </span>
      </div>
    </div>
  );
}

export default Summary;

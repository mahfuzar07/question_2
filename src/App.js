import { useState } from 'react';
import './App.css';
import Summary from './component/Summary';
function App() {
  const [inputField, setInputField] = useState([
    {
      item: '',
      qty: '',
      rate: '',
      amount: '',
    },
  ]);
  var subtotal = 0;

  const handleChange = (index, event) => {
    const values = [...inputField];
    values[index][event.target.name] = event.target.value;
    setInputField(values);
  };
  const handleAddField = () => {
    setInputField([
      ...inputField,
      {
        item: '',
        qty: '',
        rate: '',
        amount: '',
      },
    ]);
  };
  const handleRemoveField = (index) => {
    const values = [...inputField];
    values.splice(index, 1);
    setInputField(values);
  };

  return (
    <div className="App">
      <div className="productDetails">
        <table>
          <thead className="tablehd">
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {inputField.map((inputField, index) => {
              subtotal += inputField.qty * inputField.rate;
              return (
                <tr>
                  <td key={index}>
                    <input
                      type="text"
                      name="item"
                      value={inputField.item}
                      onChange={(event) => handleChange(index, event)}
                    />
                  </td>
                  <td key={index}>
                    <input
                      type="number"
                      name="qty"
                      value={inputField.qty}
                      onChange={(event) => handleChange(index, event)}
                    />
                  </td>
                  <td key={index}>
                    <input
                      type="number"
                      name="rate"
                      value={inputField.rate}
                      onChange={(event) => handleChange(index, event)}
                    />
                  </td>

                  <td key={index} className="amounttd">
                    $ {(inputField.qty * inputField.rate).toFixed(2)}
                    <input
                      type="number"
                      name="amount"
                      value={inputField.amount}
                      onChange={(event) => handleChange(index, event)}
                    />
                  </td>

                  <button onClick={handleRemoveField} className="rmbutton">
                    <i class="fas fa-times"></i>
                  </button>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <button onClick={() => handleAddField()}>
              <i class="fas fa-plus"></i> Line Item
            </button>
          </tfoot>
        </table>
      </div>
      <Summary subtotal={subtotal} />
    </div>
  );
}

export default App;

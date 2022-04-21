import { useState } from 'react';
import SingleColor from './SingleColor.jsx';
import Values from 'values.js';
import './App.css';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      // console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className='App'>
      <>
        <section className='container'>
          <h3>Color Generator App</h3>
          <form onSubmit={handleSubmit}>
            {/* Adding class of true is there is an error  */}
            <input
              type='text'
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder='#f15025'
              className={`${error ? 'error' : null}`}
            />
            <button className='btn' type='submit'>
              Submit
            </button>
          </form>
        </section>
        <section className='colors'>
          <h4>List goes here</h4>
          {list.map((color, index) => {
            console.log(color);
            return <SingleColor key={index} {...color} index={index} />;
          })}
        </section>
      </>
    </div>
  );
}

export default App;

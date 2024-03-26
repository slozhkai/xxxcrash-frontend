import './Coafisient.css'

function Coafiscient(props) {

  const calculateColor = (coaf) => {
    if (1.00 <= coaf && coaf < 1.19) {
      return 'var(--100-119-gradient)';
    } else if (1.2 <= coaf && coaf < 1.99) {
      return 'var(--120-199-gradient)';
    } else if (2.0 <= coaf && coaf < 4.99) {
      return 'var(--200-499-gradient)';
    } else if (5.0 <= coaf && coaf < 9.99) {
      return 'var(--500-999-gradient)';
    } else if (10.0 <= coaf) {
      return 'var(--1000-gradient)';
    } else {
      console.log(coaf);
      return 'var(--100-119-gradient)';
    }
  };
  return (
    <div className='coa__container' style={{backgroundImage: calculateColor(props.coaf)}}>
      <div className='coa__text'>{props.coaf}</div>
    </div>
  )
}

export default Coafiscient;


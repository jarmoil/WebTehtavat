import PropTypes from 'prop-types';
import MitenMenee from './MitenMenee';

const Greeting = (props) => {
  function handleButtonClick() {
    alert('Klikki');
  }
  return (
    <>
      <h3>Moi, {props.name}!</h3>
      <MitenMenee />
      <button onClick={handleButtonClick}>nappi</button>
    </>
  );
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;

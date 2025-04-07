import PropTypes from 'prop-types';

const Greeting = (props) => {
  return (
    <>
      <h3>Moi, {props.name}!</h3>
      <p>Miten menee?</p>
    </>
  );
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;

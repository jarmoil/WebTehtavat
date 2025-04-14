import {useLocation, useNavigate} from 'react-router-dom';

const Single = () => {
  const {state} = useLocation();
  const {item} = state;
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>Go Back</button>
      {item.media_type.includes('video') ? (
        <video src={item.filename} controls />
      ) : (
        <img src={item.filename} alt={item.title} />
      )}
      <h3>Title: {item.title}</h3>
      <p>{item.description}</p>
    </>
  );
};

export default Single;

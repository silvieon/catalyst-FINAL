import './CustomButton.css';

function CustomButton({ text, bgcolor, alertMessage }) {

  const handleClick = () => {
    alert(alertMessage);
  };

  return (
    <button className="custom-button" style={{ backgroundColor: bgcolor }} onClick={handleClick}>
      {text}
    </button>
  );
}

export default CustomButton;

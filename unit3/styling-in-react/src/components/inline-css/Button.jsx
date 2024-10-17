
function Button({ buttonText }) {
  
  const buttonStyle = {
    backgroundColor: '#b974b6',
    borderRadius: '8px',
    color: 'white',
    fontSize: '24pt',
    padding: '15px 50px',
    width: '300px',
  };
  
  return (
    <button style={buttonStyle}>{buttonText}</button>
  )
}

export default Button
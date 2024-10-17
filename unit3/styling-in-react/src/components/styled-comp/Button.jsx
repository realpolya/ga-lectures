import styled from 'styled-components';

function Button({ buttonText }) {
  
  const StyledButton = styled.button`
    background-color: #86ba8a;
    border-radius: 8px;
    color: #3d3d3d;
    padding: 15px 50px;
    font-size: 24pt;
    width: 300px;
  `;
  
  return (
    <StyledButton>{buttonText}</StyledButton>
  )
}

export default Button
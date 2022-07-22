const Button = ({bgColor, color, text, onClick}) => {
    return <button onClick={onClick} style={{backgroundColor: bgColor, color: color}} className='btn'>{text}</button>
  }
  
  export default Button
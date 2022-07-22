import Button from "./Button"

const Header = ({title, onAdd, showAdd, onToggleTheme, theme}) => {

  return (
    <header className={theme? 'header' : 'header-dark'}>
        <h1>{title}</h1>
        <div className="toggle-container">
        <Button bgColor={'maroon'} text={!showAdd ? 'Show' : 'Hide'} onClick={onAdd}/>
        {/* <Button color={theme? 'white' : 'black'} bgColor={theme? 'black' : 'white' } text={theme ? 'Dark' : 'Light'} onClick={onToggleTheme}/> */}
        
        <input type='checkbox' onClick={onToggleTheme} className='togglebar'/>
        

        </div>
    </header>
  )
}

export default Header
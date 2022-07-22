const Footer = ({footerText, theme}) => {
  return (
   
    <footer className={theme? 'footer-light' : 'footer-dark'}>
    <p>{footerText}</p>
    </footer>

  )
}

export default Footer
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ textAlign: 'center', padding: '2rem 0', marginTop: 'auto' }}>
      <div className='container'>
        <p>&copy; {currentYear} TrendVerse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

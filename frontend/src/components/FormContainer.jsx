const FormContainer = ({ children }) => {
  return (
    <div className='container' style={{ marginTop: '3rem', marginBottom: '3rem' }}>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        {children}
      </div>
    </div>
  );
};

export default FormContainer;

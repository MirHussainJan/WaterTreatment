const Loader = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(5px)',
      zIndex: 9999
    }}>
      <img 
        src="/loader (2).gif" 
        alt="Loading..." 
        style={{
          width: '150px',
          height: '150px',
          objectFit: 'contain'
        }}
      />
    </div>
  );
}

export default Loader;
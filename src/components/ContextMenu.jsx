const ContextMenu = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        right: "0",
      }}
    >
    <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '300px' }}>
        <span>New Account</span>
        <span>New Transaction</span>
    </div>
      <button style={{ height: "50px", width: "50px", borderRadius: "50%" }}>
        +
      </button>
    </div>
  );
};

export default ContextMenu;

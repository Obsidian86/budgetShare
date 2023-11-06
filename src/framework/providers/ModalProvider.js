const ModalProvider = ({ children }) => {
  return (
    <>
      <div
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "red",
          position: "fixed",
          opacity: ".4",
        }}
      ></div>
      <div>{children}</div>
    </>
  );
};

export default ModalProvider;

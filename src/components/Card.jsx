const Card = ({ children, className, background = "#fff" }) => {
  return (
    <div
      className={`p2 mxa w90 ${className}`}
      style={{ backgroundColor: background }}
    >
      {children}
    </div>
  );
};

export default Card;

const Box = (props) => {
  //  Write your code here.
  const { className, children } = props;
  return <div className={`container ${className}`}>{children}</div>;
};

const element = (
  //  Write your code here.
  <div className="main-container">
    <h1 className="heading">Boxes</h1>
    <div className="sub-container">
      <Box className="small" children="Small" />
      <Box className="medium" children="Medium" />
      <Box className="large" children="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

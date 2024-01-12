const Button = (props) => {
  //   console.log(props.handleShowAll);
  return (
    <div className="text-center">
      <button className="btn btn-primary my-5">{props.children}</button>
    </div>
  );
};

export default Button;

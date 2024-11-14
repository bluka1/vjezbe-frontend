const withColor = (WrappedComponent) => {
  return (props) => {
    const style = { backgroundColor: props.bgColor, padding: props.padding };

    return <WrappedComponent style={style} />;
  };
};

export default withColor;

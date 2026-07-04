const Order = ({placeHolder, hal}) => {
  return (
    <button onClick={() => onClick(order)}>
      {placeHolder}
    </button>
  );
};

export default Order;
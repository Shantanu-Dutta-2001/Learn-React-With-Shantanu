const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h1>I am hungry</h1>}</>;
};

export default ErrorMessage;

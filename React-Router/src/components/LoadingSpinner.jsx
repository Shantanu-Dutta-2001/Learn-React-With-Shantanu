const LoadingSpinner = () => {
  return (
    <div className="loadingSpinner">
      <div className="myspinner spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="myspinner spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="myspinner spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;

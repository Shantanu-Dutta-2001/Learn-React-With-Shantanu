const WelcomeMessage = ({ onGetPostClick }) => {
  return (
    <center className="welcomeMessage">
      <h1>There are no post</h1>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={onGetPostClick}
      >
        Get Posts From Server
      </button>
    </center>
  );
};

export default WelcomeMessage;

const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center className="welcome">
      <h1>There Are No Posts</h1>
      <button
        type="button"
        onClick={onGetPostsClick}
        className="btn btn-primary"
      >
        Get Posts From Server
      </button>
    </center>
  );
};

export default WelcomeMessage;

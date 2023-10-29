function Modal({ isCorrect, turn, solution }) {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className='modal-backdrop'>
      <div className='modal'>
        {isCorrect ? (
          <>
            <div className='modal__head'>You win!</div>
            <div className='solution'>Solution: {solution}</div>
            <div>Total turn: {turn}</div>
          </>
        ) : (
          <>
            <div className='modal__head'>Nevermind!</div>
            <div className='solution'>Solution: {solution}</div>
            <div>Better luck next time...</div>
          </>
        )}

        <button
          onClick={refreshPage}
          style={{
            backgroundColor: "lightgreen",
            border: "none",
            padding: "10px",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export default Modal;

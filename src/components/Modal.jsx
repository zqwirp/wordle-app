function Modal({ isCorrect, turn, solution }) {
  return (
    <div className='modal'>
      {isCorrect ? (
        <div>
          You win
          <br />
          solution - {solution}
          <br />
          turn - {turn}
        </div>
      ) : (
        <div>
          Nevermind!
          <br />
          solution - {solution}
          <br />
          Better luck next time...
        </div>
      )}
    </div>
  );
}

export default Modal;

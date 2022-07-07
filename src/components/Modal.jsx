function Modal({ isCorrect, turn, solution }) {
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
      </div>
    </div>
  );
}

export default Modal;

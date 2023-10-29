function Row({ guess, currentGuess, deleteChar }) {
  if (guess) {
    return (
      <div className='row past'>
        {guess.map((l, i) => (
          <div key={i} className={l.color}>
            {l.key}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split("");

    return (
      <>
        <div className='row current'>
          {letters.map((l, i) => (
            <div
              key={i}
              // className='filled'
              className={`filled ${i === letters.length - 1 ? "del" : ""}`}
              onClick={e => {
                if (i === letters.length - 1) {
                  deleteChar();
                }
              }}
            >
              {l}
            </div>
          ))}
          {[...Array(5 - letters.length)].map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className='row'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Row;

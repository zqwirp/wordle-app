import { useState } from "react";
import wordleData from "../data/db.json";

function Keypad({ usedKeys, clickChar, submitAnswer }) {
  const [letters, setLetters] = useState(() => {
    return wordleData.letters;
  });

  // useEffect(() => {
  //   fetch("http://localhost:3001/letters")
  //     .then(response => response.json())
  //     .then(json => {
  //       setLetters(json);
  //     });
  // }, []);

  return (
    <>
      <div className='keypad'>
        {letters && (
          <>
            {letters.map(l => {
              const color = usedKeys[l.key];
              return (
                <button
                  onClick={e => {
                    const value = e.target.value;
                    clickChar(value);
                  }}
                  key={l.key}
                  className={color}
                  // disabled={color !== undefined && gc}
                  value={l.key}
                >
                  {l.key}
                </button>
              );
            })}
          </>
        )}
        <button
          onClick={() => submitAnswer()}
          style={{ backgroundColor: "#444", color: "#fff" }}
        >
          &#9166;
        </button>
      </div>
    </>
  );
}

export default Keypad;

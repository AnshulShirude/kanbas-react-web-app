import React, { useState } from "react";
function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Calculator</h4>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
      />
      <input
        type="number"
        onChange={(e) => setB(Number(e.target.value))}
        value={b}
      />
      <h3>Path Parameters</h3>
      <button
        className="btn btn-primary"
        onClick={() => {
          window.location.href = `http://localhost:4000/a5/add/${a}/${b}`;
        }}
      >
        Add {a} + {b}
      </button>

      <button
        className="btn btn-danger"
        onClick={() => {
          window.location.href = `http://localhost:4000/a5/subtract/${a}/${b}`;
        }}
      >
        Subtract {a} - {b}
      </button>

      <h3>Query Parameters</h3>
      <a
        className="btn btn-primary"
        href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}
      >
        Add {a} + {b}
      </a>
      <a
        className="btn btn-danger"
        href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}
      >
        Subtract {a} - {b}
      </a>

      <h3>Multiply Path Parameters</h3>
      <button
        className="btn btn-primary"
        onClick={() => {
          window.location.href = `http://localhost:4000/a5/multiply/${a}/${b}`;
        }}
      >
        Multiply {a} * {b}
      </button>

      <button
        className="btn btn-danger"
        onClick={() => {
          window.location.href = `http://localhost:4000/a5/divide/${a}/${b}`;
        }}
      >
        Divide {a} / {b}
      </button>

      <h3>Multiply Query Parameters</h3>
      <a
        className="btn btn-primary"
        href={`http://localhost:4000/a5/calculator?operation=multiply&a=${a}&b=${b}`}
      >
        Multiply {a} * {b}
      </a>
      <a
        className="btn btn-danger"
        href={`http://localhost:4000/a5/calculator?operation=divide&a=${a}&b=${b}`}
      >
        Divide {a} / {b}
      </a>
    </div>
  );
}
export default EncodingParametersInURLs;

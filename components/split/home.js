import { useState, useEffect, useRef } from 'react';
export default function Home(prop) {
  const [tools, setTools] = useState([]);
  const fileInput = useRef(null);
  const fileInputChange = (e) => {
    console.log(e.target.files[0]);
    e.target.files.length > 0 ? prop.SetFile({ f: e.target.files[0] }) : prop.SetFile({});
  };

  return (
    <div className="container">
      <div className="my-5">
        <h2 className="h2 text-center">Split PDF</h2>
        <p className="lead text-center">
          Convert one PDF into multiple of your choice.
        </p>
        <div className="my-5 d-flex flex-row justify-content-center align-items-center">
          <button
            className="btn btn-danger btn-lg btn-md-lg"
            onClick={(e) => {
              fileInput.current.click();
            }}
          >
            Choose PDF
          </button>
          <input
            ref={fileInput}
            type="file"
            className="d-none"
            onChange={fileInputChange}
          />
        </div>
      </div>
    </div>
  );
}

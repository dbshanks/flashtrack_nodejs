import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export const CreateJournal = () => {
  const [addJournal, setAddJournal] = useState([]);
  const [redirect, setRedirect] = useState(false);

  function submit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/journals", addJournal)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  function handle(e) {
    const newAddJournal = { ...addJournal };
    newAddJournal[e.target.id] = e.target.value;
    setAddJournal(newAddJournal);
  }

  function redirectHandler() {
    setTimeout(() => setRedirect(true), 1000);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      {redirect ? <Redirect to="/journals" /> : null}
      <form onSubmit={e => submit(e)}>
        <div>
          <input
            id="title"
            onChange={e => handle(e)}
            name="title"
            type="text"
            value={addJournal.title}
            className="bg-gray-200 mb-2"
            placeholder="Title"
          />
        </div>
        <div>
          <textarea
            id="body"
            onChange={e => handle(e)}
            name="body"
            value={addJournal.body}
            className="bg-gray-200"
          />
        </div>
        <button type="submit" onClick={() => redirectHandler()}>
          Submit
        </button>
      </form>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export const GetOneJournal = (props) => {
  const [journals, setJournals] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/journals/" + props.match.params.id)
      .then((res) => {
        setJournals(res.data.data.journal);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [props.match.params.id]);

  function deleteJournal() {
    axios.delete(
      "http://localhost:5000/api/v1/journals/" + props.match.params.id
    );
    setTimeout(() => setRedirect(true), 1000);
  }

  return (
    <div className="container mx-auto text-blue-500 mt-10">
      {redirect ? <Redirect to="/journals" /> : null}
      <div key={journals._id} className="mt-5">
        <h1 className="text-2xl">{journals.title}</h1>

        <p className="text-sm text-gray-600">{journals.body}</p>
        <p>{journals.date}</p>
      </div>
      <button className="bg-red-500 text-white" onClick={() => deleteJournal()}>
        Delete
      </button>
    </div>
  );
};

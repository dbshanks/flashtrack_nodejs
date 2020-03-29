import React, { useState, useEffect } from "react";
import axios from "axios";

export const JournalEntry = props => {
  // const id = match.params.id;
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/journals/" + props.match.params.id)
      .then(res => {
        setJournals(res.data.data.journal);
      })
      .catch(res => {
        // console.log(err);
      });
  }, [props.match.params.id]);
  return (
    <div className="container mx-auto text-blue-500 mt-10">
      <div key={journals._id} className="mt-5">
        <h1 className="text-2xl">{journals.title}</h1>

        <p className="text-sm text-gray-600">{journals.body}</p>
        <p>{journals.date}</p>
      </div>
    </div>
  );
};

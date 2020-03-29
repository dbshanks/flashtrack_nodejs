import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const JournalList = () => {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/journals/")
      .then(res => {
        setJournals(res.data.data.journals);
      })
      .catch(res => {
        // console.log(err);
      });
  }, [journals._id]);
  return (
    <div className="container mx-auto text-blue-500 mt-10">
      {journals.map(journal => (
        <div key={journal._id} className="mt-5">
          <Link to={`/journal/${journal._id}`}>
            <h1 className="text-2xl">{journal.title}</h1>
          </Link>
          <p className="text-sm text-gray-600">{journal.body}</p>
          <p>{journal.date}</p>
        </div>
      ))}
    </div>
  );
};

import React from "react";
import DirectorData from "./DirectorData";
import uuid from 'uuid';

export default ({ data }) => {
  if (!data) {
    return <p>Loading...</p>;
  }
  const directors = data.map(director => {
    return <DirectorData key={uuid.v4()} director={director} />;
  });

  return (
    <div className="director-list">
      {directors}
    </div>
  );
};

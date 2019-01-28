import React from "react";
import DirectorData from "./DirectorData";
import uuid from 'uuid';

export default ({ data, lang }) => {
  const directors = data.map(director => {
    return <DirectorData key={uuid.v4()} director={director} lang={lang} />;
  });

  return (
    <div className="director-list">
      {directors}
    </div>
  );
};

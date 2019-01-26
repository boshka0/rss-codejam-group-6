import React from "react";
import Searchbar from '../Searchbar';
import DirectorList from '../DirectorList';

export default function Search(props) {
  return (
    <div className="search-wrapper">
      <h2 className="search-heading">Введите имя режиссера или его город</h2>
      <Searchbar
        term={props.term}
        initialData={props.initialData}
        update={props.update}
      />
      <DirectorList data={props.data} />
    </div>
  );
}

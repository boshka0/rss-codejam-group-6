import React from "react";
import { withNamespaces } from 'react-i18next';
import Searchbar from '../Searchbar';
import DirectorList from '../DirectorList';

function Search(props) {
  return (
    <div className="search-wrapper">
      <h2 className="search-heading">{props.t('Enter director')}</h2>
      <Searchbar
        term={props.term}
        initialData={props.initialData}
        update={props.update}
      />
      <DirectorList data={props.data} />
    </div>
  );
}

export default withNamespaces()(Search);
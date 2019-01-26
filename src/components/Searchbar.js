import React from "react";

export default ({ term, initialData, update }) => {
  const dataSearch = e => {
    const value = e.target.value.toLowerCase();

    const filter = initialData.filter(director => {
      return director.name
          .toLowerCase()
          .includes(value) || director.city.toLowerCase().includes(value);
    });

    update({
      term: value,
      data: filter
    });
  };

  return (
    <input
      value={term}
      type="text"
      className="searchbar"
      onChange={dataSearch}
    />
  );
};

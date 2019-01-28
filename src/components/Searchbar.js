import React, { Component } from 'react'

export default class Searchbar extends Component {
  dataSearch = e => {
    const value = e.target.value.toLowerCase();

    const filter = this.props.initialData.filter(director => {
      return director.name[this.props.lang]
        .toLowerCase()
        .includes(value) || director.city[this.props.lang].toLowerCase().includes(value);
    });

    this.props.update({
      term: value,
      data: filter
    });
  };
  componentWillUnmount() {
    this.props.update({
      term: "",
      data: this.props.initialData
    })
  }
  render() {
    return (
      <input
        value={this.props.term}
        type="text"
        className="searchbar"
        onChange={this.dataSearch}
        autoFocus
      />
    )
  }
}

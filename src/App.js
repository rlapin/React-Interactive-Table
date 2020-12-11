import React from "react";

import TableSearch from './components/table-search/table-search';
import DetailRowView from "./components/detail-row-view/detail-row-view";
import MainTable from "./components/main-table/main-table.component";
import Loader from "./components/loader/loader.component";
import DataSizeSelector from "./components/data-size-selector/data-size-selector";

import "bootstrap/dist/css/bootstrap.min.css";
import _ from "lodash";
import ReactPaginate from "react-paginate";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSizeSelected: false,
      isLoading: false,
      users: [],
      error: null,
      sort: "asc",
      sortField: "id",
      row: null,
      currentPage: 0,
      search: ''
    };
  }

  async fetchData(url) {
    const response = await fetch(url);
    const users = await response.json();

    this.setState({
      isLoading: false,
      users: _.orderBy(users, this.state.sortField, this.state.sort),
    });
  }

  onSort = (sortField) => {
    const clonedArray = this.state.users.concat();
    const sortDirection = this.state.sort === "asc" ? "desc" : "asc";

    const orderedUsers = _.orderBy(clonedArray, sortField, sortDirection);

    this.setState({
      users: orderedUsers,
      sort: sortDirection,
      sortField,
    });
  };

  pageChangeHandler = ({ selected }) => {
    this.setState({ currentPage: selected });
  };

  dataSizeHandler = (url) => {
    this.setState({
      dataSizeSelected: true,
      isLoading: true,
    });

    this.fetchData(url);
  };

  searchHandler = search => {
    this.setState({search, currentPage: 0})
  }

  getFilteredData() {
    const {users, search} = this.state

    if (!search) {
      return users
    }

    return users.filter(item => {
      return item['firstName'].toLowerCase().includes(search.toLowerCase())
    })
  }

  onRowSelect = (row) => {
    this.setState({ row });
  };

  render() {
    const pageSize = 50;
    if (!this.state.dataSizeSelected) {
      return (
        <div className="container">
          <DataSizeSelector onSelect={this.dataSizeHandler} />
        </div>
      );
    }

    const filteredData = this.getFilteredData()

    const pageCount = Math.ceil(filteredData.length / pageSize)

    const displayData = _.chunk(filteredData, pageSize) 
          [this.state.currentPage]

    return (
      <div className="container">
        {this.state.isLoading ? (
          <Loader></Loader>
        ) : (
          <React.Fragment>
            <TableSearch onSearch={this.searchHandler}/>
            <MainTable
            users={displayData}
            onSort={this.onSort}
            sort={this.state.sort}
            sortField={this.state.sortField}
            onRowSelect={this.onRowSelect}
          />
          </React.Fragment>

          
        )}

        {this.state.users.length > pageSize ? (
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.pageChangeHandler}
            containerClassName={"pagination"}
            activeClassName={"active"}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            nextClassName="page-item"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            forcePage={this.state.currentPage}
          />
        ) : null}

        {this.state.row ? <DetailRowView person={this.state.row} /> : null}
      </div>
    );
  }
}

export default App;

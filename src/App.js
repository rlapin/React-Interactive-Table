import React from "react";
import MainTable from "./components/main-table/main-table.component";
import Loader from "./components/loader/loader.component";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      users: [],
      error: null
    };
  }

  componentDidMount() {
    fetch(
      "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
    )
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            users: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      )
  }
  render() {
    const {error, isLoaded} = this.state;
    if (error) {
      return <div>Ошибка : {error.message}</div>
    } else if (!isLoaded) {
      return <Loader>Loading</Loader>
    } else {
      return (
        <div className="container">
          <MainTable users={this.state.users}/>
        </div>
      );
    }  
    }
  }


export default App;

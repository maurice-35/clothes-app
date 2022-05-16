import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Card } from "react-bootstrap";
import { MDBCol } from "mdbreact";
import axios from "axios";
import Search from "../clothes/Search";

const Navigation = (props) => {
  const [search, setSearch] = useState([]);
  const [filteredData, setFilteredData] = useState(search);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "https://5fd9d76f6cf2e7001737ead3.mockapi.io/api/v1/dress"
        );
        setSearch(data);
        filteredData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  });

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilteredData([]);
    } else {
      let value = event.target.value.toUpperCase();
      let result = [];
      result = search.filter((data) => {
        return data.title.search(value) !== -1;
      });
      setFilteredData(result);
      if (result.length === 0) {
        props.searchResults(false);
      } else {
        props.searchResults(result);
      }
    }
  };

  return (
    <Navbar expand="lg">
      <nav className="navbar fixed-top navbar-light bg-light">
        <Container fluid>
          <Navbar.Brand href="/Home">👗</Navbar.Brand>
          <Nav.Link href="/clothes">Clothes</Nav.Link>
          <MDBCol md="4">
            <div
              className="input-group md-form form-sm form-1 pl-0"
              {...filteredData.map((value, index) => {
                return (
                  <div>
                    <div key={value.id} />
                  </div>
                );
              })}
            >
              <div className="input-group-prepend" />
              <input
                className="form-control my-0 py-1"
                type="text"
                onChange={(event) => handleSearch(event)}
                placeholder="Search"
                arial-label="Search"
              />
            </div>
            <div>
              <Search onSearch={props.onSearch} />
              {filteredData.map((filter) => (
                <Card key={filter.id}> {filter.title}</Card>
              ))}
            </div>
          </MDBCol>
          <Nav.Link href="/Home">Home</Nav.Link>
          <Navbar.Brand href="/Home">👗</Navbar.Brand>
        </Container>
      </nav>
    </Navbar>
  );
};

export default Navigation;

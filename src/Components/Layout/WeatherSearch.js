import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import Context from "../../Context";

// Uses Context API to communicate with parent component in an upwards data flow
const Search = () => {
  const { weatherApiCall } = useContext(Context);

  return (
    <div style={{ position: "center", marginLeft: "35%", marginRight: "35%" }}>
      <Form onSubmit={weatherApiCall}>
        <Form.Group>
          <Form.Control
            type="search"
            placeholder="Search for your city..."
            name="city"
            style={{ marginTop: "1rem" }}
          ></Form.Control>
          <Button
            type="submit"
            variant="secondary"
            style={{
              position: "center",
              marginLeft: "35%",
              marginRight: "35%",
              marginTop: "1rem",
            }}
          >
            Search
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Search;

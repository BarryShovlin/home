import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <p>
          <small className="text-muted">
           Copyright 2021 Barry Shovlin
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

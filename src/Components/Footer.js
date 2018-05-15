import React from "react";
import styled from "styled-components";
var faker = require("faker");

const FooterContent = styled.div`
  width: 100%;
  box-sizing: border-box;
  text-align: justify;
  background: radial-gradient(
    circle farthest-side,
    rgb(86, 171, 47),
    rgb(168, 224, 99)
  );
  padding: 1rem;
`;
const H1 = styled.h1`
  text-align: center;
`;
const Text = styled.p`
  width:65%;
  margin: 0 auto;
  text-align: center;
  font-size: 1rem;
`;

class Footer extends React.Component {
  render() {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        product: faker.commerce.product(),
        material: faker.commerce.productMaterial(),
        price: faker.commerce.price()
      });
    }
    return (
      <FooterContent>
        <H1> This is Footer </H1>
        <div>
          <Text>{faker.lorem.sentences()}</Text>
        </div>
      </FooterContent>
    );
  }
}

export default Footer;

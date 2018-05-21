import React from "react";
import styled from "styled-components";
var faker = require("faker");

const MainContent = styled.div`
  width: 100%;
  background-color: rgb(229, 229, 229);
  box-sizing: border-box;
  text-align: justify;
  padding: 1rem;
`;
const Ul = styled.ul`
  width: 50%;
  display: block;
  font-size: 1.2rem;
  margin: 0px auto;
  padding: 1em;
`;
const H1 = styled.h1`
  text-align: center;
`;
const Text = styled.p`
  text-align: justify;
  font-size: 1.5rem;
`;

class Body extends React.Component {
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
      <MainContent>
        <H1> This is Body </H1>
        <div>
          <Ul>
            {data.map((el, ind) => (
              <li key={ind}>
                {el.product} made of {el.material} for ${el.price}
              </li>
            ))}
          </Ul>
        </div>
        <div>
          <Text>{faker.lorem.sentences()}</Text>
          <p style={{fontSize:"1.5rem"}}>
            Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed,
            convallis at tellus. Donec rutrum congue leo eget malesuada. Proin
            eget tortor risus. Cras ultricies ligula sed magna dictum porta.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Curabitur non nulla sit amet nisl tempus convallis quis ac
            lectus. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vivamus magna justo, lacinia eget
            consectetur sed, convallis at tellus. Donec rutrum congue leo eget
            malesuada. Proin eget tortor risus. Cras ultricies ligula sed magna
            dictum porta. Vestibulum ac diam sit amet quam vehicula elementum
            sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis
            quis ac lectus.Sed porttitor lectus nibh. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget
            consectetur sed, convallis at tellus. Donec rutrum congue leo eget
            malesuada. Proin eget tortor risus. Cras ultricies ligula sed magna
            dictum porta. Vestibulum ac diam sit amet quam vehicula elementum
            sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis
            quis ac lectus.
          </p>
          <p style={{fontSize:"1.5rem"}}>
            Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed,
            convallis at tellus. Donec rutrum congue leo eget malesuada. Proin
            eget tortor risus. Cras ultricies ligula sed magna dictum porta.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Curabitur non nulla sit amet nisl tempus convallis quis ac
            lectus. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vivamus magna justo, lacinia eget
            consectetur sed, convallis at tellus. Donec rutrum congue leo eget
            malesuada. Proin eget tortor risus. Cras ultricies ligula sed magna
            dictum porta. Vestibulum ac diam sit amet quam vehicula elementum
            sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis
            quis ac lectus.Sed porttitor lectus nibh. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget
            consectetur sed, convallis at tellus. Donec rutrum congue leo eget
            malesuada. Proin eget tortor risus. Cras ultricies ligula sed magna
            dictum porta. Vestibulum ac diam sit amet quam vehicula elementum
            sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis
            quis ac lectus.
          </p>
        </div>
      </MainContent>
    );
  }
}

export default Body;

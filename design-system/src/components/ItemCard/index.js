import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { colors } from "../../tokens";

export const ItemCard = styled.div`
  outline: 1px red dashed;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

export const FavButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 3rem;
  height: 3rem;
`;

export const CardHeader = styled.header`
  position: relative;
`

export default (props) => {
  return (
    <ItemCard as="article">
      <CardHeader>
        <Image src={props.src} />
        <FavButton>
          { props.isFavorite ? '❤' : '🤍' }
        </FavButton>
      </CardHeader>
      <main>
        <section>
          Men's Shoe
        </section>
        <section>
          Nike Air Force 1 '07 LX
        </section>
        <section>
          €95.00
        </section>
      </main>
      <footer>
        <Button isStretched>
            Add to cart
        </Button>
      </footer>
    </ItemCard>
  );
};

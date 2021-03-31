import React from "react";
import styled from 'styled-components';
import theme from '../style/theme';
import { useGlobalContext } from "../context";
import { Card } from "./Card";

export const ProductsList = () => {
  const { products } = useGlobalContext();

  return (
    <Container>
      <ProductListContainer>
      {products.map((item) => {
        return <Card key={item._id} {...item} />;
      })}
      </ProductListContainer>
    </Container>
  );
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media ${theme.mediaQueries.above600} {
		flex-direction: row;
		justify-content: center;
	}


	@media ${theme.mediaQueries.above768}{
		justify-content: space-between;
		margin: 0 4% 0 4%
	})
`;

const ProductListContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media ${theme.mediaQueries.above600}{
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		max-width: 100%;
	})

`;
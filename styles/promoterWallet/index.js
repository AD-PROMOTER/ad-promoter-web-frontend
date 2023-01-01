import styled from 'styled-components';

const PromoterWalletStyles = styled.div`
  padding: 3.3rem 2.5rem 1.3rem 2.5rem;
  /* display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 22.5rem 40rem;
  gap: 1.5rem 2rem; */
  display: flex;
  gap: 1.5rem 2rem;
  /* align-items: center; */
  > div {
    display: flex;
    flex-direction: column;
    /* gap: 4rem; */
  }
`;

export default PromoterWalletStyles;

export const PromoterWalletContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

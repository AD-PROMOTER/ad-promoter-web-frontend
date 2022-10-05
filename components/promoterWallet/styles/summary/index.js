import styled from 'styled-components';

export const WalletSummaryStyles = styled.div`
  background: var(--white);
  grid-column-start: 1;
  grid-column-end: 3;
  box-shadow: var(--shadow-6);
  border-radius: 0.6rem;
  padding: 1.5rem;

  .intro {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.25rem;

    h1 {
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 2.25rem;
    }

    button {
      background: transparent;
      cursor: pointer;
    }
  }

  .cardContainer {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 0;
  width: 20rem;
  border-radius: 0.75rem;
  background: var(${(props) => props.bg});
  box-shadow: var(${(props) => props.shadow});

  .header {
    display: flex;
    justify-content: center;
    color: var(--black);

    p {
      font-weight: 500;
      font-size: 1.5rem;
      margin-left: 0.5rem;
    }
  }

  .amount {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.3rem;
    margin-top: 1.1rem;
  }
`;

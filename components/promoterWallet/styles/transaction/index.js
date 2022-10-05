import styled from 'styled-components';

export const TransactionHistoryStyles = styled.div`
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

    &__trash {
      background: transparent;
      cursor: pointer;
    }
  }

  .transactionContainer {
    overflow-y: scroll;
    height: 30rem;
  }
`;

export const TransactionStyles = styled.div`
  background: #f4f4f4;
  border-radius: 0.75rem;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  margin-bottom: 0.7rem;

  .profile {
    display: flex;

    &__img {
      width: 2.5rem;
      height: 2.5rem;
    }

    p {
      color: var(--deep-blue);
      font-weight: 500;
      line-height: 150%;
      letter-spacing: -0.03em;
      margin-left: 1rem;
      height: fit-content;
      margin-top: 1rem;
    }
  }

  .transaction {
    color: var(--black);
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.03em;
    height: fit-content;
    margin-top: 1rem;
  }
`;

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

    button {
      background: transparent;
      cursor: pointer;
      border: 2px solid var(--primary);
      border-radius: 0.6rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 19rem;

      .statement {
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.2rem;
        color: var(--primary);
        display: flex;
        justify-content: space-between;
        width: 15rem;

        p {
          padding-top: 0.5rem;
        }
      }
    }
  }

  .transactionContainer {
    overflow-y: scroll;
    height: 30rem;
    background: #f4f4f4;
    cursor: grab;
  }
`;

export const TransactionStyles = styled.div`
  background: #fff;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  height: ${(props) => {
    props.show ? '72px' : '100px';
  }};

  .container {
    display: grid;
    // justify-content: space-between;
    grid-template-columns: repeat(4, 1fr);
    gap: 4.4rem;
    padding: 1.2rem;

    &__profile {
      display: flex;
      width: 17rem;

      img {
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

    &__transaction {
      display: flex;
      justify-content: space-between;
      color: var(--black);
      font-weight: 500;
      line-height: 150%;
      letter-spacing: -0.03em;
      height: fit-content;
      margin-top: 1rem;
      width: 35rem;
    }

    &__rotate {
      transform: rotate(90deg);
      margin-top: 1rem;
      transition: all 0.5s ease;
    }

    &__arrow {
      cursor: pointer;
    }
  }

  .failed {
    background: #eb1e1e;
    color: #fff;
    font-size: 0.7rem;
    margin-top: 1.6rem;
    border: 1px solid #dbd8fc;
    border-radius: 6.2rem;
    padding: 0.25rem 1rem;
  }

  .complete {
    background: var(--green-2);
    color: #fff;
    font-size: 0.7rem;
    margin-top: 1.6rem;
    border: 1px solid #dbd8fc;
    border-radius: 6.2rem;
    padding: 0.25rem 1rem;
  }

  .progress {
    background: var(--light-blue-1);
    color: #fff;
    font-size: 0.7rem;
    margin-top: 1.6rem;
    border: 1px solid #dbd8fc;
    border-radius: 6.2rem;
    padding: 0.25rem 1rem;
  }
`;

export const TransactionDropdownStyles = styled.div`
  background: #fff;
  padding: 1rem 1.5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5rem;

  h3 {
    font-size: 0.8rem;
    margin-bottom: 0.25rem;
    color: var(--black-1);
  }

  p {
    font-size: 1rem;
    margin-top: 0.25rem;
    color: var(--gray);
  }

  button {
    background: var(--primary);
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    padding: 0.7rem 1.5rem;
    width: 9rem;
    cursor: pointer;

    p {
      color: var(--white);
      margin-left: 0.8rem;
    }
  }
`;

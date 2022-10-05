import styled from 'styled-components';

export const WithdrawProcessStyles = styled.div`
  margin-bottom: 3.5rem;

  .close {
    text-align: end;

    button {
      background: transparent;
      cursor: pointer;
    }
  }

  form {
    margin-top: 1.1rem;

    h2 {
      text-align: center;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 2.2rem;
    }

    .acct {
      margin-top: 2.5rem;

      &__container {
        display: flex;
        justify-content: space-between;
        border: 1px solid #ebebed;
        padding: 1.2rem 1.5rem;
        border-radius: 0.8rem;

        .acctDetails {
          display: flex;
          justify-content: space-between;
          width: 20rem;

          .acctName {
            font-size: 1rem;
            line-height: 1.8rem;
            color: var(--unknown-5);
            margin-top: 0.5rem;
          }

          .acctNum {
            font-weight: 500;
            line-height: 1.8rem;
            margin-bottom: 0.5rem;
          }
        }
      }

      &__container:hover {
        border: 0.07rem solid #dce4ff;
      }

      &__bank1 {
        margin-bottom: 2.8rem;
      }
    }

    .amountInput {
      margin-top: 2.8rem;

      label {
        font-size: 0.8rem;
        margin-bottom: 0.2rem;
      }

      input {
        width: 100%;
        border-radius: 0.6rem;
        border: 1px solid #e1e1e1;
        padding-left: 1rem;
      }

      .balance {
        font-size: 0.8rem;
        font-weight: 600;
        color: #404040;
        text-align: end;
      }
    }
  }
`;

export const WithdrawalDetailsStyles = styled.div`
  .bold {
    font-weight: 600;
  }

  .header {
    display: flex;
    justify-content: center;
    padding-top: 2.1rem;
    margin-bottom: 1.8rem;

    &__content {
      display: flex;
      justify-content: end;
      width: 100%;

      h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--black-1);
        margin-right: 6.4rem;
      }

      button {
        color: #5c85ff;
        font-size: 1.1rem;
        font-weight: 600;
        background: transparent;
        cursor: pointer;
      }
    }
  }

  .withdrawal {
    &__details {
      margin: 1.5rem 0;
      font-size: 1rem;
      color: var(--dark-grey);
      display: flex;
      justify-content: space-around;

      ul {
        li {
          margin-bottom: 0.7rem;
        }

        .flex {
          display: flex;

          p {
            margin-left: 0.6rem;
          }
        }
      }
    }

    &__total {
      .amount {
        margin: 1.5rem 0;
        font-size: 1rem;
        color: var(--dark-grey);
        display: flex;
        justify-content: space-around;

        ul {
          li {
            margin-bottom: 0.7rem;
          }
        }
      }
    }

    &__notice {
      font-size: 1rem;
      margin-top: 1.5rem;
      text-align: center;
      padding: 0 4rem;
      color: var(--dark-grey);
    }
  }

  .confirm {
    text-align: center;
    margin-top: 3.6rem;
    font-size: 1rem;
    color: var(--dark-grey);

    input {
      margin-right: 1.1rem;
    }
  }
`;

export const WithdrawalFundsStyles = styled.div`
  .bold {
    font-weight: 600;
  }

  .close {
    text-align: end;

    button {
      background: transparent;
      cursor: pointer;
    }
  }

  .loading {
    text-align: center;
    margin-top: 0.6rem;
  }

  .funds {
    margin-top: 10.5rem;

    &__header {
      text-align: center;

      h2 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 0.2rem;
      }

      p {
        font-size: 1rem;
      }
    }

    &__message {
      font-size: 1rem;
      text-align: center;
      margin-top: 1.8rem;
    }

    &__withdrawal {
      margin-top: 1.8rem;

      .summary {
        display: flex;
        justify-content: space-around;
        font-size: 1rem;
        color: var(--dark-grey);
        margin: 1.5rem 0;

        ul {
          li {
            margin-bottom: 0.7rem;
          }

          .flex {
            display: flex;

            div {
              margin-left: 0.6rem;
            }
          }
        }
      }
    }

    &__amount {
      display: flex;
      justify-content: space-around;
      font-size: 1rem;
      color: var(--dark-grey);
      margin-top: 1.5rem;
      margin-bottom: 2.5rem;
    }

    &__home {
      text-align: center;
      margin-top: 1.5rem;
      margin-bottom: 2.5rem;

      .cancel {
        border-radius: 8px;
        background: transparent;
        border: 1px solid #b3b3b3;
        padding: 0.7rem 2.2rem;
        font-size: 1rem;
        font-weight: 600;
        margin-right: 1rem;
        cursor: pointer;
      }

      .confirm {
        background: var(--primary);
        border-radius: 8px;
        color: var(--white);
        padding: 0.7rem 2.2rem;
        font-size: 1rem;
        font-weight: 600;
        margin-left: 1rem;
        cursor: pointer;
      }

      a {
        background: #4f00ce;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        color: var(--white);
        font-weight: 700;
        line-height: 1.5rem;
        font-size: 1rem;
        width: 15.3rem;
        cursor: pointer;
      }
    }

    &__notice {
      margin-top: 1.5rem;
      font-size: 1rem;
    }
  }
`;

export const PaymentDetailsStyles = styled.div`
  .close {
    text-align: end;

    button {
      background: transparent;
      cursor: pointer;
    }
  }

  .container {
    padding: 1.1rem 4.4rem;

    h2 {
      text-align: center;
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--black-1);
    }

    form {
      margin-top: 4.1rem;

      .input {
        width: 23.5rem;

        label {
          font-size: 1rem;
          font-weight: 600;
          color: var(--light-gray-1);
        }

        &__element {
          width: 100%;
          border: 1px solid #e1e1e1;
          border-radius: 0.6rem;
          margin-bottom: 2.8rem;
          padding: 0.8rem 1.2rem;
          outline: 0;
          font-size: 1rem;
          font-weight: 600;
          color: #e0e0e0;
          letter-spacing: -0.011em;
        }
      }

      //  .submit {
      //   text-align: center;

      //   button {
      //     background: #4f00cf;
      //     box-shadow: 0px 1px 4px rgba(103, 127, 214, 0.15);
      //     border-radius: 0.5rem;
      //     color: #fff;
      //     font-size: 1rem;
      //     font-weight: 700;
      //     padding: 0.8rem 3.5rem;
      //     cursor: pointer;
      //   }
      // }
    }

    .submit {
      text-align: center;

      button {
        background: #4f00cf;
        box-shadow: var(--shadow-6);
        border-radius: 0.5rem;
        color: var(--white);
        font-size: 1rem;
        font-weight: 700;
        padding: 0.8rem 3.5rem;
        cursor: pointer;
      }
    }
  }
`;

export const VerificationStyles = styled.div`
  .close {
    text-align: end;

    button {
      background: transparent;
      cursor: pointer;
    }
  }

  .container {
    padding: 1.1rem 4.4rem;

    h2 {
      text-align: center;
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--black-1);
    }

    &__info {
      margin-top: 1rem;
      font-size: 1rem;
      color: var(--dark-gray);
      text-align: center;
      color: var(--dark-gray);
    }

    &__number {
      margin-top: 1.4rem;
      font-size: 1rem;
      color: var(--dark-gray);
      text-align: center;
      letter-spacing: -0.02em;

      .hashed {
        font-weight: 600;
      }
    }

    &__code {
      margin-top: 1.4rem;
      text-align: center;

      p {
        font-size: 1rem;
        color: var(--dark-gray);
        letter-spacing: -0.02em;
      }

      .codebox {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0.7rem;
        width: fit-content;
        padding: 0 0.5rem;
        margin-left: 6.5rem;
        margin-top: 0.7rem;

        input {
          width: 2.2rem;
          height: 2.2rem;
          text-align: center;
        }
      }
    }

    &__submit {
      margin-top: 3.7rem;
      text-align: center;
      font-size: 1rem;
      color: var(--dark-gray);
      letter-spacing: -0.02em;

      button {
        background: #d3b8ff;
        box-shadow: var(--shadow-6);
        border-radius: 0.5rem;
        color: var(--white);
        font-size: 1rem;
        font-weight: 600;
        padding: 0.8rem 3.5rem;
        cursor: pointer;
        margin-bottom: 0.5rem;
      }
    }
  }
`;

export const SuccessStyle = styled.div`
  .close {
    text-align: end;

    button {
      background: transparent;
      cursor: pointer;
    }
  }

  .container {
    h2 {
      text-align: center;
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--black-2);
    }

    &__home {
      margin-top: 22.2rem;
      font-size: 1rem;
      text-align: center;

      p {
        color: var(--dark-gray);
        margin-bottom: 2.5rem;
      }

      a {
        background: #4f00cf;
        box-shadow: var(--shadow-6);
        border-radius: 0.5rem;
        color: var(--white);
        font-size: 1rem;
        font-weight: 700;
        padding: 0.8rem 3.5rem;
        cursor: pointer;
      }
    }
  }
`;

import styled from 'styled-components';

export const StyledTabBody = styled.div`
  .notifBox {
    border-radius: 10px;
    .link-box {
      margin: 1.5rem;
      padding-top: 2.12rem;
      display: flex;
      justify-content: space-between;

      button {
        height: 29px;
        width: 119px;
        border: 1px solid #dbd8fc;
        border-radius: 100px;
        outline: none;
        border-style: none;
        color: #fff;
        display: flex;
        text-align: center;
        align-items: center;
        font-size: 14px;
        font-weight: 400;
        justify-content: center;
      }

      button:hover,
      div:hover {
        cursor: pointer;
      }
      .dot {
        cursor: pointer;
        position: relative;
        font-size: 1.4rem;
        ul {
          border-radius: 0.9rem;
          box-shadow: var(--shadow-1);
          background-color: var(--white);
          position: absolute;
          top: 0;
          right: 0;
          width: 20rem;
          li {
            padding: 1.2rem 2.4rem;
            border-bottom: 1px solid #dbd8fc;
            cursor: pointer;
            font-weight: 500;
            font-size: 14px;
            line-height: 18px;
            color: var(--black-1);
            /* padding: 0px 24px; */
          }
        }
      }
    }

    .adPost {
      margin: 1.5rem;
      padding-top: 14px;

      > p {
        width: 210px;
        font-weight: 600;
        font-size: 16px;
      }

      .tags {
        display: flex;
        gap: 8px;

        p {
          font-size: 12px;
          font-weight: 400;
          padding-top: 7px;
        }

        #conf {
          width: 115px;
          height: 34px;
          border-style: none;
          outline: none;
          background: #f2f2f2;
          display: flex;
          text-align: center;
          align-items: center;
          border-radius: 100px;
          justify-content: center;
          font-size: 12px;
          font-weight: 400;
        }

        #food {
          width: 62px;
          height: 34px;
          border-style: none;
          outline: none;
          background: #f2f2f2;
          display: flex;
          text-align: center;
          align-items: center;
          border-radius: 100px;
          justify-content: center;
          font-size: 12px;
          font-weight: 400;
        }
      }
    }
  }

  .product {
    .descr p {
      margin-left: 1.5rem;
      padding-top: 16px;
      color: #333333;
      font-size: 16px;
      font-weight: 400;
    }
  }

  .ad-stats {
    padding-top: 41px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    p {
      font-size: 14px;
      font-weight: 600;
    }

    .price {
      .price-header {
        display: flex;
        align-items: center;
        gap: 9px;
      }
      .price-rate {
        font-size: 12px;
        color: #666666;
      }
    }

    .aim {
      .aim-header {
        display: flex;
        align-items: center;
        gap: 9px;
      }

      .aim-rate {
        font-size: 12px;
        color: #666666;
        position: relative;
        left: 6px;
      }
    }

    .achieved {
      .achieved-header {
        display: flex;
        align-items: center;
        gap: 9px;
        padding-top: 10px;
      }

      .achieved-rate {
        font-size: 12px;
        color: #666666;
        position: relative;
        left: 6px;
      }
    }
  }

  .posterDetails {
    display: flex;
    align-items: center;
    margin: 1.5rem;
    justify-content: space-between;
    padding-bottom: 20px;
    padding-top: 50px;

    .imgName {
      display: flex;
      gap: 4px;

      p {
        font-size: 12px;
        font-weight: 600;
        color: #2c2828;
      }
    }

    .time p {
      font-size: 10px;
      padding-top: 5px;
    }

    .var-links img:hover {
      cursor: pointer;
    }
  }
`;

export const Feed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.6rem;
  gap: 1.6rem;
  background-color: var(--white);
  border-radius: 1rem;
  .product-summary {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.2rem;
    &-head {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2.4rem;
      .ad-type-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        width: 36.3rem;
        .dot {
          cursor: pointer;
          position: relative;
          ul {
            border-radius: 0.9rem;
            box-shadow: var(--shadow-1);
            background-color: var(--white);
            position: absolute;
            top: 0;
            right: 0;
            width: 20rem;
            li {
              padding: 1.2rem 1.4rem;
              border-bottom: 1px solid #dbd8fc;
              cursor: pointer;
              font-weight: 500;
              font-size: 14px;
              line-height: 18px;
              color: var(--black-1);
              display: flex;
              align-items: center;
              gap: 1rem;
              /* padding: 0px 24px; */
            }
          }
        }
      }
      .adtype {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.4rem 1.6rem;
        background-color: ${(props) => props.bg};
        border-radius: 10rem;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.1rem;
        color: var(--white);
      }
    }

    .business-name-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.2rem;
      h3 {
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: var(--black-2);
      }
      .tag-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.8rem;
        p {
          font-weight: 400;
          font-size: 1.2rem;
          line-height: 1.8rem;
          color: var(--black-2);
        }
        .tag {
          display: flex;
          align-items: flex-start;
          gap: 0.4rem;
          > div {
            display: flex;
            align-items: flex-start;
            padding: 0.8rem 1.6rem;
            background: #f2f2f2;
            border-radius: 10rem;
            font-weight: 400;
            font-size: 1.2rem;
            line-height: 1.8rem;
            color: var(--black-2);
          }
        }
      }
    }
  }
  .product-summary-text {
    width: 33.9rem;
    p {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: var(--dark-gray);
      span {
        cursor: pointer;
        font-weight: 600;
      }
    }
  }

  .product-plan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 0px;
    gap: 6rem;
    .price,
    .aim,
    .achieved {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.6rem;
      p {
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.6rem;
        color: var(--dark-gray);
      }
      .head {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.8rem;
        h4 {
          font-weight: 600;
          font-size: 1.3rem;
          line-height: 1.8rem;
        }
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* gap: 2.4rem; */
    width: 36.3rem;
    .user-details {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
      gap: 0.4rem;
      &-text {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.4rem;
        h5 {
          font-weight: 600;
          font-size: 1.2rem;
          line-height: 1.8rem;
          color: var(--black-2);
        }
      }
      p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
        color: var(--dark-gray);
      }
    }
    .share-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2.4rem;
      img {
        cursor: pointer;
      }
    }
  }

  .product-img-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    .paste-input {
      display: flex;
      align-items: center;
      .copy-icon {
        margin-right: -4rem;
        z-index: 10;
      }
      .input {
        input {
          background: #e6e6e6;
          border: 2px solid #ffffff;
          border-radius: 12px;
          width: 36.3rem;
          height: 5.2rem;
          padding-left: 6rem;
          padding-right: 10rem;
        }
      }
      .button {
        padding: 1rem 2rem;
        color: #ffffff;
        background: #6b8bfc;
        border-radius: 10px;
        margin-left: -8.5rem;
        cursor: pointer;
        p {
          font-weight: 500;
          font-size: 1.3rem;
          line-height: 2rem;
        }
      }
    }
    .btn {
      padding: 1.3rem 0.8rem;
      border-radius: 1rem;
      background-color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 150%;
      letter-spacing: -0.02em;
      color: #ffffff;
      width: 11.2rem;
      cursor: pointer;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
`;
export const ModalContainer = styled.div`
  position: fixed;
  z-index: 500;
  background-color: var(--white);
  width: 38.8rem;
  min-height: 42.6rem;
  border-radius: 1rem;
  box-shadow: var(--shadow-2);
  padding: 2.4rem 1.6rem;
  left: 3%;
  top: 20%;

  .report {
    text-align: center;

    .advert {
      font-weight: 600;
      font-size: 2.4rem;
    }
    .reason {
      font-size: 1.2rem;
    }
  }

  .language {
    margin-top: 3rem;
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .input-container {
    /* display: flex; */
    position: relative;
    .inputArea {
      width: 35.6rem;
      padding: 1.6rem 2rem;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 0.1rem solid var(--lighter-gray);

      .inputText {
        font-weight: 500;
        line-height: 1.8rem;
        font-size: 1.2rem;
        letter-spacing: -0.02em;
        color: var(--dark-gray);
      }
    }
    ul {
      background-color: var(--white);
      border: 1px solid #dbd8fc;
      border-radius: 1rem;
      top: 6rem;
      left: 0.2rem;
      width: 35.6rem;
      position: absolute;

      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid #dbd8fc;
        cursor: pointer;
        font-size: 1.2rem;
        line-height: 1.8rem;
        letter-spacing: -0.02em;
        color: var(--dark-gray);
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }

  .reportButton {
    display: flex;
    justify-content: flex-end;
    margin-top: 18rem;

    button {
      padding: 1.2rem 3.6rem;
      background-color: var(--primary);
      color: white;
      border-radius: 0.8rem;
      cursor: pointer;
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 150%;
      text-align: center;
    }
  }
`;

export const BackdropContainer = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  cursor: default;
  backdrop-filter: blur(12px);
`;

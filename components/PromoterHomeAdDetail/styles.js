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
      p:hover {
        cursor: pointer;
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

import styled from 'styled-components';

export const StyledHomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 425px) {
    display: none;
  }
  /* height: 100vh; */
`;
export const StyledHome = styled.div`
  padding: 4rem 3.7rem 1.2rem 3.7rem;
  display: flex;
  gap: 3.18rem;
  height: 100vh;
  /* margin: auto; */
  .home-dashboard {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3.6rem;
    width: 88.5rem;
    cursor: grab;
    .welcome {
      background: #ffffff;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 2.4rem;
      width: 100%;
      .profile-img {
        flex: 1;
      }

      .user-details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.8rem;
        flex: 2.5;
        p {
          font-weight: 700;
          font-size: 2.4rem;
          line-height: 150%;
          letter-spacing: -0.03em;
          color: var(--black-1);
        }
        .sub-user-details {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          gap: 1.2rem;
          p {
            font-weight: 500;
            font-size: 1.6rem;
            line-height: 150%;
            letter-spacing: -0.02em;
          }
        }
      }

      /* .user-status {
        background: linear-gradient(57.67deg, #0702fd 2.15%, #83f8e3 97.85%);
        opacity: 0.53;
        color: #fff;
        width: 13.4rem;
        height: 13.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
       
        p {
          font-weight: 700;
          font-size: 1.6rem;
          line-height: 150%;
          letter-spacing: -0.03em;
        }
      } */
    }

    .dashboard-summary {
      background: #ffffff;
      border-radius: 10px;
      width: 100%;
      padding: 2.4rem;
      display: flex;
      flex-direction: column;
      gap: 3.6rem;
      &-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        h3 {
          font-weight: 600;
          font-size: 2.4rem;
          line-height: 3.6rem;
          color: var(--black-1);
        }
        .filter {
          display: flex;
          /* flex-direction: column; */
          align-items: center;
          justify-content: space-between;
          padding: 14px 24px;
          gap: 10px;
          background: #ffffff;
          border: 1px solid #dbd8fc;
          width: 281px;
          height: 52px;
          border-radius: 10px;
          cursor: pointer;
          p {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #010101;
          }
        }
        ul {
          background-color: var(--white);
          position: absolute;
          top: 7rem;
          right: 0rem;
          border-radius: 1.2rem;
          box-shadow: var(--shadow-1);
          width: 28rem;
          z-index: 10;

          li {
            padding: 1.2rem 2.4rem;
            border-bottom: 0.1rem solid #dbd8fc;
            cursor: pointer;
            font-weight: 500;
            font-size: 1.4rem;
            line-height: 2.1rem;
            color: #010101;
          }
        }
      }
      &-info {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 2.4rem;
        grid-template-areas:
          '. . .'
          '. . .'
          '. . .';
        &-item {
          background: #d2efff;
          box-shadow: 1px 2px 4px rgba(33, 76, 95, 0.2);
          border-radius: 12px;
          padding: 4rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.8rem;
          &-child {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 16px;
            .title {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.8rem;
              p {
                font-weight: 500;
                font-size: 1.4rem;
                line-height: 21px;
                color: #000;
              }
            }
            h3 {
              font-weight: 700;
              font-size: 2.4rem;
              line-height: 36px;
              color: var(--black-1);
            }
          }
        }
      }
    }
  }
`;
export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
  width: 41.1rem;
  height: 150%;
  .tab-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
    .tab-container {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 0px;
      gap: 3.8rem;
      .tab {
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        a {
          font-weight: 400;
          font-size: 1.4rem;
          line-height: 2.1rem;
          color: #4d4d4d;
          /* border-bottom: ${({ selected }) =>
            selected ? '1px solid black' : ''}; */
        }
        .active {
          font-weight: 600;
          font-size: 1.4rem;
          line-height: 2.1rem;
          color: #4d4d4d;
        }
        .bottom-dash {
          width: 6rem;
          height: 0.3rem;
          background: #4f00cf;
          border-radius: 10rem;
        }
      }
    }
    .sort-btn {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0.8rem 1.2rem;
      gap: 0.8rem;
      width: 7.7rem;
      height: 3.7rem;
      background: #ffffff;
      border-radius: 0.4rem;
      cursor: pointer;
      p {
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 2.1rem;
        color: #000000;
      }
    }
    ul {
      background-color: var(--white);
      position: absolute;
      top: 5rem;
      right: 0rem;
      border-radius: 1.2rem;
      box-shadow: var(--shadow-1);
      width: 18rem;
      z-index: 10;
      li {
        padding: 1.2rem 2.4rem;
        border-bottom: 0.1rem solid #dbd8fc;
        cursor: pointer;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.1rem;
        color: #010101;
      }
      /* @media screen and (min-width: 1716px) {
        right: 23%;
      } */
    }
  }
  .tab-body {
    width: 105%;
    cursor: grab;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;
  }
`;

export const MobileCotainer = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2rem;
  display: none;
  @media screen and (max-width: 425px) {
    display: block;
  }

  .welcome {
    background-color: white;
    padding: 2.4rem 1.4rem;
    border-radius: 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .userProfile {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .username {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
      font-weight: 600;
      font-size: 1.7rem;
      line-height: 2.2rem;
    }
  }
  .wave {
    display: flex;
    align-items: center;
    gap: 1rem;

    p {
      font-size: 1.3rem;
      line-height: 1.8rem;
      letter-spacing: -0.078px;
    }
  }
  .promo {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .dashboard {
    margin-top: 1rem;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.4rem;
    letter-spacing: 0.38px;
    margin-bottom: 1rem;
  }
  .balance {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 2.4rem;
    padding-bottom: 2.4rem;
    border-radius: 1.2rem;
    gap: 0.8rem;
  }
  .item-name {
    font-size: 1.5rem;
    line-height: 2rem;
    letter-spacing: 0.24px;
  }
  .item-price {
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.4rem;
    letter-spacing: 0.38px;
  }

  .summary-info {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.7rem;
    margin-top: 1rem;
  }
  .item-summary {
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    align-items: center;
    justify-content: center;
    padding-top: 2.4rem;
    padding-bottom: 2.4rem;
    width: 18.5rem;
    border-radius: 1.2rem;

    h3 {
      font-weight: 600;
      font-size: 2.2rem;
      line-height: 2.8rem;
      letter-spacing: 0.35px;
    }
  }
  .item-icon {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    p {
      font-size: 1.5rem;
      line-height: 2rem;
      letter-spacing: -0.24px;
    }
  }
  .sort {
    background-color: white;
    padding: 2rem 2rem 2rem 1.5rem;
    border-radius: 1.6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  .tab-sort {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    a {
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 2rem;
      letter-spacing: -0.24px;
      /* border-bottom: ${({ selected }) =>
        selected ? '1px solid black' : ''}; */
    }
  }
  .active-job {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #4f00cf;
    letter-spacing: -0.5px;
  }
  .dash-bottom {
    width: 6rem;
    height: 0.3rem;
    background: #4f00cf;
    border-radius: 10rem;
  }
  .arrow-sort {
    display: flex;
    align-items: center;
    gap: 1.3rem;
    padding: 0.8rem 1.2rem;
    border: 1px solid #d8d8fc;
    border-radius: 0.4rem;

    p {
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 2.1rem;
    }
  }
  .no-sort {
    display: flex;
    align-items: center;
    gap: 1.3rem;

    p {
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 2.1rem;
    }
  }
  .list {
    background-color: var(--white);
    position: absolute;
    top: 87rem;
    right: 2.3rem;
    border-radius: 1.2rem;
    box-shadow: var(--shadow-1);
    width: 18.2rem;
    z-index: 100;

    li {
      padding-top: 1.2rem;
      padding-bottom: 1.2rem;
      padding-left: 2.4rem;
      border-bottom: 0.1rem solid #d9d9d9;
      cursor: pointer;
      font-size: 1.4rem;
      line-height: 2.1rem;
      font-weight: 600;
    }
  }
`;

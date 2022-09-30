import styled from 'styled-components';

export const StyledHome = styled.div`
  padding: 4rem 5.3rem 1.2rem 3.7rem;
  display: flex;
  gap: 3.18rem;
  height: 100%;
  .home-dashboard {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3.6rem;
    width: 88.5rem;
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

      .user-status {
        background: linear-gradient(57.67deg, #0702fd 2.15%, #83f8e3 97.85%);
        opacity: 0.53;
        color: #fff;
        width: 13.4rem;
        height: 13.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        /* flex: 2; */
        p {
          font-weight: 700;
          font-size: 1.6rem;
          line-height: 150%;
          letter-spacing: -0.03em;
        }
      }
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
        h3 {
          font-weight: 600;
          font-size: 2.4rem;
          line-height: 3.6rem;
          color: var(--black-1);
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
  .home-ad-detail {

    .adTab, .switch_tab, .sort_btn, ad{
      display: flex;
    }
    .adTab {
      
      align-items: center;
      text-align: center;
      justify-content: space-between;
    }
    .switch_tab {
      gap: 20px;
    }
    .switch_tab p{
      width: 60px;
    }
    .sort_btn {
      width: 77px;
      height: 33px;
      background-color: #fff;
      justify-content: center;
      border-radius: 4px;
      gap: 10px;
      flex: center;
    }
    .sort_btn p{
      padding-top: 5px;
    }
    aside > div p{
      font-size: 14px;
    }
    aside .switch_tab p:hover {
      font-weight: bold;
      border-bottom: solid 4px #4f00cf;
    }

    //notification box styling

    .notifBox {
      border-radius: 10px;
      margin-top: 16px;
      margin-bottom: 20px;
      padding-top: 34px;
      padding-left: 24px;
      padding-right: 26px;
      height: 600px;

      &>.link-box {
        display: flex;
        justify-content: space-between;
        button {
          height: 29px;
          width: 119px;
          border-radius: 100px;
          background: #0594fb;
          font-size: 14px;
          color: #fff;
        }
        p {
          position: relative;
          top: -3px;
        }
      }
      
      &>.adPost {
        padding-top: 1.87rem;

        &>p {
          width: 13.25rem;
          height: 1.5rem;
          font-weight: 600;
          font-size: 1rem;
          line-height: 1.5rem;
          color: #2C2828;
        }
        &>.tags {
          display: flex;
          gap: 0.5rem;
          padding-top: 0.7rem;

          p{
            font-size: 12px;
            font-weight: 400;
            margin-top: 5px;
          }
          button {
            width: fit-content;
            height: 3.12rem;
            display: flex;
            padding: 0.5rem 1rem;
            background: #f2f2f2;
            border-radius: 100px;
            font-size: 12px;
            font-weight: 400;
            justify-content: center;
          }
        }
      }
      &>.product {
        margin-top: 2rem;

        .descr {
          p {
            height: 9rem;
            line-height: 24px;
            font-size: 1.5rem;
            padding-right: 1.37rem;
          }
        }
      }

      &>.ad-stats {
        margin-top: 8.5rem;
        display: flex;
        justify-content: space-around;
        margin-left: -10px;

        .price-header, .aim-header, .conversion-header {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1rem;
          font-weight: 600;
        }

        .price-rate,
        .aim-rate,
        .conversion-rate {
          font-size: 14px;
          margin-top: 10px;
          font-weight: 400px;
          padding-left: 2px;
          color: #666666;
        }
      }
    }

    //posts and poster details
    
    .posterDetails {
      margin-top: 9.5rem;
      display: flex;
      justify-content: space-between;

      .var-links {
        display: flex;
        gap: 1rem;
      }

      .poster {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px; 

        p {
          font-size: 12px;
          font-weight: 600;
        }
      }
    }
  }
`;

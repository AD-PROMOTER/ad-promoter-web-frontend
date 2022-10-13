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
      .tab {
        display: flex;
        margin-top: -.5rem;
        padding-bottom: 1.25rem; 

        .switch-tab {
          display: flex;
          gap: 2.68rem;

          button {
            background: transparent;
            font-size: 14px;
            font-weight: 600;
            color: #0d0d0d;
            
          }

          button:hover {
            border-bottom: 3px solid #4F00CF;
          }

        }

        .sort-btn {
          display: flex;
          margin-left: 9.75rem;
          width: 7rem;
          height: 3.31rem;
          gap: 10px;
          font-size: 14px;
          padding-left: 5px;
          font-weight: 600;
          background-color: #fff;
          text-align: center;
          align-items: center;
          border-radius: 4px;
    
        }
      }

      // notificationBox styling

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
              border: 1px solid #DBD8FC;
              border-radius: 100px;
              outline: none;
              border-style: none;
              color: #fff;
              display: flex;
              text-align: center;
              align-items: center;
              font-size: 14px;
              font-weight: 400;
              justify-content: center
            }

            button:hover, p:hover {
              cursor: pointer;
            }

        }

        .adPost {
          margin: 1.5rem;
          padding-top: 14px;

          >p {
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
              background: #F2F2F2;
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
              background: #F2F2F2;
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
            color: #2C2828;
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

import styled from 'styled-components';
import { size } from './breakpoints';

export const StyledHome = styled.div`
  padding: 4rem 3.7rem 1.2rem 3.7rem;
  display: flex;
  gap: 3.18rem;
  height: 100%;

  @media screen and (max-width: ${size.tablet}) {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
  }

  @media screen and (max-width: ${size.mobileL}) {
    display: block;
    width: 428px;
    height: 100%;
    padding: 1rem;
  }
`;
export const DashboardContainer = styled.div`
  width: 88.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.6rem;

  // mobile view
  @media screen and (max-width: ${size.mobileL}) {
    display: block;
  }

  .welcome {
    display: flex;
    flex-direction: row;
      align-items: center;
      gap: 6rem;
      isolation: isolate;
      width: 100%;
      background: #ffffff;
      border-radius: 10px;



    .bell {
      display: none;

      @media screen and (max-width: ${size.mobileL}) {
        display: flex;
        margin-left: 190px;
      }
    }

    .box-welcome {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 2.4rem;
      gap: 6rem;
      isolation: isolate;
      // width: 100%;
      background: #ffffff;
      border-radius: 10px;
  
      @media screen and (max-width: ${size.mobileL}) {
        gap: 8px;
        padding: 1rem;
      }
        > .profile-img {
          height: 65px;
          width: 63px;

          @media screen and (max-width: ${size.tablet}) {
            height: 134px;
            width: 145px;
          }
        }
      }
      &-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.8rem;
        h3 {
          font-weight: 700;
          font-size: 2.4rem;
          line-height: 150%;
          letter-spacing: -0.03em;
          color: var(--black-1);
  
          @media screen and (max-width: ${size.mobileL}) {
            font-size: 14px;
            font-weight: 500;
          }
        }
        &-sub {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 1.2rem;
          p {
            font-weight: 500;
            font-size: 1.6rem;
            line-height: 150%;
            letter-spacing: -0.02em;
            color: var(--black-1);
  
            @media screen and (max-width: ${size.mobileL}) {
              font-size: 10px;
              font-weight: 400;
            }
          }
        }
      }
      .placers-frame {
        flex: 2;
        display: flex;
        justify-content: flex-end;

        @media screen and (max-width: ${size.tablet}) {
          height: 134px;
          width: 145px;
          margin-right: 30px;
        }

        @media screen and (max-width: ${size.mobileL}) {
          display: none;
        }
      }
  }

 
  }
`;

export const DashboardSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.4rem 1.5rem;
  gap: 3.6rem;
  isolation: isolate;
  width: 100%;
  background: #ffffff;
  border-radius: 10px;
  /* width: 885px; */
  /* height: 640px; */
  /* width: 885px; */

  @media screen and (max-width: ${size.mobileL}) {
  }

  @media screen and (max-width: ${size.mobileL}) {
    padding: 1rem;
    gap: 1rem;
    width: 100%;
    background: #ffffff;
    border-radius: 10px;
  }
  .header-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3.6rem;
    h3 {
      font-weight: 600;
      font-size: 2.4rem;
      line-height: 3.6rem;
      color: var(--black-1);
      @media screen and (max-width: ${size.mobileL}) {
        font-weight: 600;
        font-size: 1rem;
      }
    }
  }

  .dashboard-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;
    /* width: 837px; */

    &-board {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin: auto;
      gap: 2.4rem;
      /* width: 837px;
            height: 156px; */

      @media screen and (max-width: ${size.mobileL}) {
        padding: 0;
        margin: 0;
        gap: 2rem;
      }
      &-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2.4rem 6rem;
        gap: 0.8rem;
        box-shadow: 1px 2px 4px rgba(33, 76, 95, 0.2);
        border-radius: 12px;
        width: 27rem;
        height: 15.6rem;

        @media screen and (max-width: ${size.mobileL}) {
          display: block;
          width: 126.67px;
          height: 104px;
          padding: 1rem;
          gap: 0.3rem;
        }

        &-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.6rem;
          &-icon {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 0.8rem;
            width: 18rem;

            @media screen and (max-width: ${size.mobileL}) {
              display: block;
              text-align: center;
              padding-top: 0.5rem;
            }
            h3 {
              font-weight: 500;
              font-size: 1.4rem;
              line-height: 2.1rem;
              color: var(--black);

              @media screen and (max-width: ${size.mobileL}) {
                font-size: 14px;
                line-height: 1rem;
                padding-top: 0.5rem;
              }
            }
          }
          h2 {
            font-weight: 700;
            font-size: 2.4rem;
            line-height: 3.6rem;
            color: var(--black-1);

            @media screen and (max-width: ${size.mobileL}) {
              font-size: 1rem;
              font-weight: 600;
              line-height: 1rem;
            }
          }
        }
      }
    }
    &-activity {
      width: 100%;
      height: 324px;
      background: #f5f5f7;
      border-radius: 10px;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 3rem;

      @media screen and (max-width: ${size.mobileL}) {
        width: 428px;
        height: 236px;
        background: #f5f5f7;
        border-radius: 10px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 3rem;
      }

      &-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h3 {
          font-weight: 600;
          font-size: 24px;
          line-height: 36px;
          color: #141522;

          @media screen and (max-width: ${size.mobileL}) {
            font-size: 12px;
          }
        }
        .time-filter {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0px;
          gap: 17px;
          .time-week {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 4px 16px;
            gap: 8px;
            background: #ffffff;
            border-radius: 4px;

            h4 {
              font-weight: 500;
              font-size: 14px;
              line-height: 21px;
              letter-spacing: -0.02em;
              color: #141522;
            }
          }
          .month-filter {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0px;
            gap: 4px;
            h4 {
              font-weight: 400;
              font-size: 14px;
              line-height: 16px;
              color: #2e3a59;

              @media screen and (max-width: ${size.mobileL}) {
                font-size: 10px;
              }
            }
          }
        }
      }
      &-chart {
        width: 797px;
        height: 230px;
        background: #ffffff;
        border-radius: 10px;

        @media screen and (max-width: ${size.mobileL}) {
          width: 390px;
          height: 170px;
        }
      }
    }
  }
`;

export const RecentAdsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
  width: 41.1rem;

  .header {
    display: flex;
    align-items: flex-start;
    /* gap: 21rem; */
    justify-content: space-between;
    width: 100%;
    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.6rem;
      h4 {
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 2.1rem;
        color: var(--black-1);
        /* background-color: red; */
      }
      .bottom-dash {
        width: 6rem;
        height: 0.3rem;
        background-color: var(--primary);
        border-radius: 10rem;
      }
    }
    .sort {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0.8rem 1.2rem;
      gap: 0.8rem;
      background: #ffffff;
      border-radius: 0.4rem;
      cursor: pointer;
      h4 {
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        color: #000000;
      }
    }
  }
  .body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;

    &-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 24px;
      gap: 16px;
      background: #ffffff;
      border-radius: 10px;
      width: 100%;
      .head {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 22px;
        .tag-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px;
          gap: 8px;
          .ad-tag {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 4px 16px;
            gap: 8px;
            background: #0594fb;
            border: 1px solid #dbd8fc;
            border-radius: 100px;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            text-align: center;
            color: #ffffff;
          }
          .business-tag {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
            gap: 2px;
            h4 {
              font-weight: 600;
              font-size: 16px;
              line-height: 24px;
              color: #2c2828;
            }
            &-container {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 8px;

              p {
                font-weight: 400;
                font-size: 12px;
                line-height: 18px;
                color: #2c2828;
              }
              .tag {
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                padding: 0px;
                gap: 4px;
                .tag-1,
                .tag-2 {
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  padding: 8px 16px;
                  gap: 10px;
                  background: #f2f2f2;
                  border-radius: 100px;
                  font-weight: 400;
                  font-size: 12px;
                  line-height: 18px;
                  color: #2c2828;
                }
              }
            }
          }
        }
        .details {
          font-weight: 400;
          font-size: 14px;
          line-height: 21px;
          color: #333333;
        }
      }

      .conversion-body {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 40px 0px;
        gap: 60px;
        .aim,
        .conversion,
        .price {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px;
          gap: 4px;
          .head {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 0px;
            gap: 8px;
            p {
              font-weight: 600;
              font-size: 14px;
              line-height: 21px;
              color: #0d0d0d;
            }
          }
          p {
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
            color: #333333;
          }
        }
      }
      .time-stamp {
        font-weight: 400;
        font-size: 10px;
        line-height: 15px;
        color: #333333;
      }
    }
  }
`;

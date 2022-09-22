import styled from 'styled-components';

export const StyledHome = styled.div`
  padding: 3rem 5.3rem 1.2rem 3.7rem;
  display: flex;
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
  }
`;

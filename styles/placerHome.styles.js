import styled from 'styled-components';

export const StyledHome = styled.div`
  width: 144rem;
  display: flex;
  align-items: flex-start;
  padding: 4rem 5.3rem 1.2rem 3.7rem;
  box-sizing: border-box;
`;
export const DashboardContainer = styled.div`
  width: 88.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.6rem;
  .welcome {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2.4rem;
    gap: 6rem;
    isolation: isolate;
    width: 100%;
    background: #ffffff;
    border-radius: 10px;
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
        }
      }
    }
    .placers-frame {
      flex: 2;
      display: flex;
      justify-content: flex-end;
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
            h3 {
              font-weight: 500;
              font-size: 1.4rem;
              line-height: 2.1rem;
              color: var(--black);
            }
          }
          h2 {
            font-weight: 700;
            font-size: 2.4rem;
            line-height: 3.6rem;
            color: var(--black-1);
          }
        }
      }
    }
  }
`;

export const RecentAdsContainer = styled.div``;

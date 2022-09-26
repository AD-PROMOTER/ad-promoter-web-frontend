import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;
  gap: 24px;

  position: absolute;
  width: 568px;
  height: 541.56px;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    .verify-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4.4rem;
      &-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4rem;
        &-head {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1.6rem;
          h3 {
            font-weight: 600;
            font-size: 2rem;
            line-height: 2.1rem;
            letter-spacing: -0.02em;
            color: var(--black-1);
            /* border-bottom: 1px solid #B3B3B3; */
          }
          > div {
            width: 34rem;
            height: 0.2px;
            background-color: #b3b3b3;
            /* border: .3px solid #B3B3B3; */
          }
        }
        p {
          font-weight: 400;
          font-size: 1.4rem;
          line-height: 1.8rem;
          letter-spacing: -0.02em;
          color: var(--dark-gray);
          text-align: center;
        }
      }
      .btn {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 1.2rem 3.6rem;
        gap: 1rem;
        background: #d3bff3;
        border-radius: 8px;
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 150%;
        letter-spacing: -0.02em;
        color: #ffffff;
        cursor: pointer;
        &:hover {
          background: var(--primary);
        }
        &:active {
          background: #3d019d;
        }
      }
    }
    .cta {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 1rem;
      gap: 1rem;
      border-top: 1px solid #b3b3b3;
      p {
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.8rem;
        letter-spacing: -0.02em;
        color: var(--dark-gray);
      }
    }
  }
`;

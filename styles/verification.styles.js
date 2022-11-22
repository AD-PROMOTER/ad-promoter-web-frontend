import styled from 'styled-components';

export const Overlay = styled.div`
  padding: 12rem;
  width: 70.6rem;
  height: 85.7rem;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    &-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2.4rem;
      &-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
        &-child {
          display: flex;
          flex-direction: column;
          align-items: center;
          &_text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2.4rem 0rem;
            gap: 6rem;
            h3 {
              font-weight: 600;
              font-size: 2.4rem;
              line-height: 2.1rem;
              align-items: center;
              letter-spacing: -0.02em;
              color: var(--black-1);
            }
            p {
              font-weight: 400;
              font-size: 1.6rem;
              line-height: 1.8rem;
              text-align: center;
              letter-spacing: -0.02em;
              color: var(--dark-gray);
            }
          }
        }
      }
      &-btn {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 1.2rem 3.6rem;
        background: #4f00cf;
        box-shadow: 2px 6px 16px rgba(25, 55, 215, 0.25);
        border-radius: 8px;
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 150%;
        align-items: center;
        letter-spacing: -0.02em;
        color: #ffffff;
        cursor: pointer;
      }
    }
    .cta {
      border-top: 1px solid #b3b3b3;
      padding: 10px;
      p {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.8rem;
        letter-spacing: -0.02em;
        color: var(--dark-gray);
        a {
          font-weight: 600;
          color: var(--blue);
        }
      }
    }
  }
`;

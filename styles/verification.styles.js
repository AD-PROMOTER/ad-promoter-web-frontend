import styled from 'styled-components';

export const Overlay = styled.div`
<<<<<<< HEAD
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;
  gap: 24px;

  position: absolute;
  width: 568px;
  height: 541.56px;
=======
  padding: 12rem;
  width: 70.6rem;
  height: 85.7rem;
>>>>>>> 920e43a4171c7c5bc8f3a410a862eabcf800dfa4
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
<<<<<<< HEAD
    justify-content: center;
    gap: 4rem;
    .verify-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4.4rem;
=======
    gap: 4rem;
    &-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2.4rem;
>>>>>>> 920e43a4171c7c5bc8f3a410a862eabcf800dfa4
      &-text {
        display: flex;
        flex-direction: column;
        align-items: center;
<<<<<<< HEAD
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
=======
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
>>>>>>> 920e43a4171c7c5bc8f3a410a862eabcf800dfa4
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 1.2rem 3.6rem;
<<<<<<< HEAD
        gap: 1rem;
        background: #d3bff3;
=======
        background: #4f00cf;
        box-shadow: 2px 6px 16px rgba(25, 55, 215, 0.25);
>>>>>>> 920e43a4171c7c5bc8f3a410a862eabcf800dfa4
        border-radius: 8px;
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 150%;
<<<<<<< HEAD
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
=======
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
>>>>>>> 920e43a4171c7c5bc8f3a410a862eabcf800dfa4
      }
    }
  }
`;

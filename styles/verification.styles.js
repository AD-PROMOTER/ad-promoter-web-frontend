import styled from 'styled-components';

export const Overlay = styled.div`
  padding: 4rem;
  width: 60%;
  position: relative;

  .content-container {
    display: flex;
    flex-direction: column;
    gap: 15rem;
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 4rem;

      &-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2.4rem;
        &-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0px;
          gap: 0.2rem;
          h2 {
            font-weight: 700;
            font-size: 2.4rem;
            line-height: 3.6rem;
            color: var(--dark-gray);
          }
          p {
            width: 40.2rem;
            text-align: center;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: var(--dark-gray);
            span {
              font-weight: 600;
            }
          }
        }
      }
      &-input {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: flex-start;
        .input-container {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 0.939rem;
          input {
            width: 6.511rem;
            height: 6.687rem;
            background: #ffffff;
            border: 1.17318px solid #808080;
            border-radius: 0.703909rem;
            text-align: center;
            font-weight: 500;
            font-size: 2.40436rem;
            line-height: 3.6rem;
            color: var(--dark-gray);
          }
        }
        p {
          font-weight: 600;
          font-size: 1.8rem;
          line-height: 2.7rem;
          color: var(--dark-gray);
          span {
            color: var(--primary);
          }
        }
      }
    }
    .content-btn {
      width: 52.8rem;
      height: 6.4rem;
      background: var(--primary);
      box-shadow: 2px 6px 16px rgba(25, 55, 215, 0.25);
      border-radius: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white);
      font-weight: 500;
      font-size: 2.2rem;
      line-height: 3.3rem;
      cursor: pointer;
      /* margin-top: 12rem; */
    }
    .inactive {
      width: 52.8rem;
      height: 6.4rem;
      background: var(--primary);
      opacity: 0.5;
      box-shadow: 2px 6px 16px rgba(25, 55, 215, 0.25);
      border-radius: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white);
      font-weight: 500;
      font-size: 2.2rem;
      line-height: 3.3rem;
      cursor: pointer;
    }
  }
`;

import styled from 'styled-components';

export const Overlay = styled.div`
  width: 79.5rem;
  height: 68.3rem;
  padding: 4rem 0;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12rem;
    .welcome {
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
        gap: 0.2rem;
        h3 {
          font-weight: 500;
          font-size: 2.4rem;
          line-height: 3.6rem;
          color: var(--dark-gray);
          width: 60%;
          text-align: center;
        }
      }
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
      gap: 2.4rem;
      .placers,
      .promoters {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 52.8rem;
        height: 6.2rem;
        padding: 1rem 1.6rem;
        gap: 1rem;
        background: #ffffff;
        border: 2px solid #f2f2f2;
        border-radius: 8px;
        input {
          width: 2.4rem;
          height: 2.4rem;
          border-radius: 50%;
          border: 5px solid #f2f2f2;
        }
      }
    }
  }
`;

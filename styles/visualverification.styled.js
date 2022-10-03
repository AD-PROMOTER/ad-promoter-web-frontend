import styled from 'styled-components';

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12rem;
  .header {
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
        text-align: center;
        width: 48.5rem;
      }
      p {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: var(--dark-gray);
      }
    }
  }
  .submitform {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12rem;
    .paste-input-container {
      .copied {
        color: var(--green);
      }
      .paste-input {
        display: flex;
        align-items: center;
        .copy-icon {
          margin-right: -4rem;
          z-index: 10;
          cursor: pointer;
        }
        .input {
          input {
            background: #e6e6e6;
            border: 2px solid #ffffff;
            border-radius: 12px;
            width: 52.8rem;
            height: 5.2rem;
            padding-left: 6rem;
            padding-right: 10rem;
          }
        }
        .button {
          padding: 1rem 2rem;
          color: #ffffff;
          background: #6b8bfc;
          border-radius: 10px;
          margin-left: -8.5rem;
          cursor: pointer;
          p {
            font-weight: 500;
            font-size: 1.3rem;
            line-height: 2rem;
          }
        }
      }
    }
  }
`;

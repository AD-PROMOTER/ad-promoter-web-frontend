import styled from 'styled-components';

export const Overlay = styled.div`
  padding: 12rem;
  width: 70.6rem;
  height: 85.7rem;
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 5rem;
    height: fit-content;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    @media (min-width: 768px) and (max-width: 1024px) {
      gap: 2rem;
    }
    &-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2.4rem;
      @media (min-width: 768px) and (max-width: 1024px) {
        gap: 1rem;
      }
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
            @media (min-width: 768px) and (max-width: 1024px) {
              gap: 2rem;
            }
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
        @media (min-width: 768px) and (max-width: 1024px) {
          margin-bottom: 3rem;
        }
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
export const VerificationMobile = styled.div`
  display: none;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 5rem;
  @media screen and (max-width: 425px) {
    display: block;
  }
  .logo {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
  h3 {
    text-align: center;
    font-weight: 600;
    font-size: 2.2rem;
    line-height: 2.8rem;
    letter-spacing: 0.35px;
    margin-top: 2rem;
  }
  .verify {
    text-align: center;
    font-size: 1.3rem;
    line-height: 1.8rem;
    letter-spacing: -0.078px;
    margin-top: 2.5rem;
  }
  .btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 17.2rem;
    height: 4.5rem;
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
    margin: 5rem auto 2rem auto;
  }
  .cta {
    border-top: 1px solid #b3b3b3;
    padding: 1rem;
    p {
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 1.8rem;
      letter-spacing: -0.02em;
      color: var(--dark-gray);
      a {
        font-weight: 600;
        color: var(--blue);
      }
    }
  }
`;

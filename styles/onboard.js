import styled from 'styled-components';

export const StyledOnboarding = styled.div`
  /* height: 100%; */
  background-color: var(--white);
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
  border-bottom: 1px solid rgba(102, 102, 102, 0.25);
  .cta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    .lang {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.2rem;
      cursor: pointer;
      p {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: var(--dark-gray);
      }
    }
    .login-btn {
      border: 1px solid var(--black-4);
      border-radius: 8px;
      padding: 0.5rem 2.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
`;

export const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  .onboard-image {
    height: 100%;
    img {
      /* height: 200%; */
      /* width: 100%;
            height: 100%; */
    }
  }
  .onboard-text-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5.6rem;
    width: 46rem;
    margin: auto;
    height: 73.8rem;
    &-head {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 0.8rem;
      h2 {
        font-weight: 600;
        font-size: 4.8rem;
        line-height: 5.6rem;
        text-align: center;
        color: var(--black-4);
      }
      p {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 24px;
        text-align: center;
        color: var(--gray);
      }
    }
    &-subhead {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4.8rem;
      .socials {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2.4rem;
      }
      .divider {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 23px;
        p {
          font-weight: 400;
          font-size: 1.5rem;
          line-height: 24px;
        }
        > div {
          width: 19.55rem;
          height: 0.2rem;
          background: rgba(102, 102, 102, 0.25);
        }
      }
      &-bottom {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 8px;
        .cta {
          width: 46rem;
          height: 5.6rem;
          background: var(--primary);
          border-radius: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          p {
            color: #fff;
            font-weight: 400;
            font-size: 1.8rem;
            line-height: 27px;
          }
        }
        .terms {
          padding: 0.8rem;
          text-align: center;
          p {
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 21px;
            text-align: center;
            color: var(--dark-gray);
            a {
              color: var(--primary);
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`;

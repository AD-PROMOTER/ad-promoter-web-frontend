import styled from 'styled-components';

export const StyledMobileNav = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  > div {
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    gap: 6rem;
    background: #ffffff;
    border-top: 1px solid #e6e6e6;
    width: 100%;
    .link {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      width: 3.646rem;

      .bottom-dash {
        width: 3.646rem;
        height: 0.4rem;
        background: #4f00cf;
        border-radius: 100rem;
      }
    }
  }
`;

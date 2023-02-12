import styled from 'styled-components';

export const StyledMobileNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 7rem;
  background: #ffffff;
  border-top: 1px solid #e6e6e6;
  .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
    /* a {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.4rem;
        text-transform: capitalize;
        color: var(--dark-gray-2);
      } */
    .bottom-dash {
      width: 3.646rem;
      height: 0.4rem;
      background: #4f00cf;
      border-radius: 100rem;
    }
    /* .activeLink {
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: var(--black-1);
      } */
  }
`;

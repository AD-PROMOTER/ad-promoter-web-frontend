import styled from 'styled-components';

export const Overlay = styled.div`
  width: 63.4rem;
  height: 65.5rem;
  padding-top: 4rem;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    h3 {
      font-weight: 600;
      font-size: 2.4rem;
      line-height: 3.6rem;
      color: var(--black-2);
    }
    p {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 150%;
      letter-spacing: -0.02em;
      color: var(--dark-gray);
      width: 50%;
      text-align: center;
    }
    .btn {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 1.40969rem 11.0132rem;
      gap: 0.881rem;
      box-shadow: 0px 1px 4px rgba(103, 127, 214, 0.15);
      border-radius: 10.5727px;
      background: #d3bff3;
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 1.9rem;
      text-align: center;
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
`;

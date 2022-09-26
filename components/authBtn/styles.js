import styled from 'styled-components';

export const StyledBtn = styled.div`
  outline: none;
  border-radius: 40px;
  .btn-sm {
    width: 46rem;
    height: 5.6rem;
    border-radius: 40px;
    background: #d3bff3;
    /* opacity: 0.25; */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      /* opacity: none; */
      background: var(--primary);
    }
    &:active {
      background: #3d019d;
    }
    p {
      color: #fff;
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 27px;
    }
  }
  .btn-lg {
    width: 52.8rem;
    height: 6.4rem;
    background: #d3bff3;
    /* opacity: 0.25; */
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #fff;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 27px;
    &:hover {
      /* opacity: 0; */
      background: var(--primary);
    }
    &:active {
      background: #3d019d;
    }
  }
`;

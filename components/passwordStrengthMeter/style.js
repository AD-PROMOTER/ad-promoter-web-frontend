import styled from 'styled-components';

export const Container = styled.div`
  .progress {
    height: 1rem;
    width: 100%;
    font-size: 0.75rem;
    background-color: #e9ecef;
    border-radius: 0.375rem;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
    overflow: hidden;
    &-bar {
      color: var(--white);
      background-color: #0d6efd;
      transition: width 0.6s ease;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      text-align: center;
      white-space: nowrap;
      height: 1rem;
      width: 100%;
    }
  }
`;

import styled from 'styled-components';

export const NotificationModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);
  .notification-modal {
    background: #f7f7f7;
    border-radius: 10px;
    width: 62rem;
    position: absolute;
    top: 10rem;
    height: 74.5rem;
    right: calc(10% - 100px);
    &-head {
      background: #ffffff;
      width: 100%;
      padding: 1.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      &-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 23.3rem;
        width: 57.2rem;
        h3 {
          font-weight: 600;
          font-size: 24px;
          line-height: 150%;
          letter-spacing: -0.03em;
          color: var(--black-1);
          text-transform: uppercase;
        }
        .close-icon {
          cursor: pointer;
        }
      }
    }
  }
`;

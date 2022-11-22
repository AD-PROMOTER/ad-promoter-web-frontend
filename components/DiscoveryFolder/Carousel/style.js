import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .carousel-wrapper {
    display: flex;
    width: 100%;
    position: relative;
    .carousel-content-wrapper {
      overflow: hidden;
      width: 100%;
      height: 100%;
      .carousel-content {
        display: flex;
        transition: all 250ms linear;
        -ms-overflow-style: none; /* hide scrollbar in IE and Edge */
        scrollbar-width: none; /* hide scrollbar in Firefox */
        &::-webkit-scrollbar {
          display: none;
        }
        & > * {
          width: 100%;
          flex-shrink: 0;
          flex-grow: 1;
        }
      }
    }
    .left-arrow,
    .right-arrow {
      position: absolute;
      z-index: 1;
      top: 50%;
      transform: translateY(-50%);
      width: 48px;
      height: 48px;
      border-radius: 24px;
      background-color: white;
      border: 1px solid #ddd;
    }

    .left-arrow {
      left: 24px;
    }

    .right-arrow {
      right: 24px;
    }
  }
`;
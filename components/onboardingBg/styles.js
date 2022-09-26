import styled from 'styled-components';

export const BgContainer = styled.div`
  /* background: linear-gradient( rgba(17, 17, 17, 0.5) 100%, rgba(17, 17, 17, 0.5) 100%),url(${(
    props
  ) => props.image.src}); */
  width: 100%;
  height: 102.4rem;
  /* background-size: cover;
    background-repeat: no-repeat; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .landing-image {
    height: 102.4rem;
    width: 100%;
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .overlay {
    /* width: 79.5rem;
        height: 81.1rem; */
    background: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6rem;
    /* padding: 4rem 13rem; */
    position: relative;
    .close {
      position: absolute;
      right: 3.2rem;
      top: 3.2rem;
      cursor: pointer;
    }
  }
`;

import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 500;
  background-color: var(--white);
  width: 50%;
  border-radius: 0.8rem;
  box-shadow: var(--shadow-2);
  padding: 4.8rem;
  left: 30%;
  top: 30%;

  .report {
    text-align: center;

    .advert {
      font-weight: 600;
      font-size: 2.4rem;
    }
    .reason {
      font-size: 1.2rem;
    }
  }

  .language {
    margin-top: 3rem;
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .inputArea {
    width: 52.7rem;
    padding: 1.6rem 2rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 0.1rem solid var(--lighter-gray);

    .inputText {
      font-size: 1.2rem;
    }
  }
  ul {
    background-color: var(--white);
    border-radius: 0.8rem;
    box-shadow: var(--shadow-1);
    margin-top: 1rem;
    width: 52.7rem;

    li {
      padding: 1.2rem 2.4rem;
      border-bottom: 0.1rem solid #d9d9d9;
      cursor: pointer;
    }
  }

  .reportButton {
    display: flex;
    justify-content: flex-end;
    margin-top: 5rem;

    button {
      padding: 0.8rem 3rem;
      background-color: var(--primary);
      color: white;
      border-radius: 1rem;
      font-size: 1.6rem;
      cursor: pointer;
    }
  }
`;
export const BackdropContainer = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
`;

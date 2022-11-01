import styled from 'styled-components';

const StyledSettings = styled.div`
  padding: 3rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  main {
    margin-top: 3.5rem;
    background-color: var(--white);
    width: 900px;
    border-radius: 4px;
    min-height: 70vh;
    padding: 3rem 0.75rem;
    box-shadow: var(--shadow-6);

    .categories {
      width: 100%;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;

      li {
        margin: 0 2.25rem;
        color: var(--light-gray-2);
        font-size: 1.35rem;
        font-weight: 400;
        cursor: pointer;
        padding: 0 0.75rem;
        padding-bottom: 0.8rem;
        transition: 150ms ease-out;
      }
    }

    .contents {
      margin-top: 1rem;
      color: var(--black);
      padding: 2rem;
    }
  }
  @media screen and (max-width: 805px) {
    StyledSettings {
      padding: 0;
    }
    main {
      width: 100vw;
    }
  }
  .blurred {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.375);
    backdrop-filter: blur(12px);
  }

  .modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    width: 500px;
    background-color: white;
    box-shadow: var(--shadow-6);
    position: fixed;
    top: 25%;
    border-radius: 6px;
    z-index: 99;

    .close-modal {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 25px;
      width: 25px;
      position: absolute;
      top: 4%;
      right: 4%;
      cursor: pointer;
      border: 1px solid var(--dark-gray);
      ${'' /* padding: 0.25rem; */}
      border-radius: 50%;
    }

    .contents {
      text-align: center;
      width: 100%;
      margin: 3rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p {
        margin: 2rem 0;
        color: var(--black);
        font-weight: 600;
        font-size: 1.85rem;
      }
      span {
        color: var(--dark-gray);
        font-weight: 500;
        font-size: 1.425rem;
      }
      .upload {
        margin: 1rem 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1.25rem;
        width: fit-content;
        border: 1px solid var(--light-blue);
        border-radius: 6px;
        background-color: #dce4ff;
        padding: 0.75rem 1.05rem;
        cursor: pointer;
      }
      .cancel {
        margin-top: 3rem;
      }
    }
    .photo-modal {
      width: 250px;
    }

    .btn-controls {
      margin-top: 8rem;
      display: flex;
      justify-content: center;
      gap: 7rem;
      align-items: center;
    }
  }

  .logout {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    position: fixed;
    cursor: pointer;
    bottom: 6%;
    right: 7%;
    z-index: 20;

    p {
      color: red;
      font-weight: 500;
    }
  }
`;

const StyledGeneral = styled.form`
  margin-top: 1.5rem;
  color: var(--black);
  display: flex;
  flex-direction: column;

  .languages {
    p {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--black-3);
    }

    .dropdown {
      background-color: transparent;
      color: var(--black-2);
      margin-top: 1.3rem;
      width: 300px;
      font-size: 1.35rem;
      font-weight: 500;
      cursor: pointer;
      padding: 0.75rem 0.45rem;
      border: 0.145rem solid #e1e1e1;
      border-radius: 4px;
    }
    .dropdown:hover {
      border: 0.145rem solid #ccc;
    }

    .dropdown:focus {
      outline: none;
    }
  }

  .timezone {
    margin-top: 5rem;
    p {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--black-3);
    }

    div {
      margin-top: 0.75rem;
      display: flex;
      flex-direction: row;
      gap: 6rem;

      #select {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: fit-content;
        padding: 1.25rem 1.5rem;
        border-radius: 6px;
        cursor: pointer;
        transition: all 100ms ease-in-out;

        label {
          font-size: 1.3rem;
          font-weight: 500;
          cursor: pointer;
        }
      }
    }
  }
  .controls {
    width: 90%;
    margin-top: 17rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .modal {
    width: 700px;
    top: 5%;

    ${
      '' /* display: flex;
            justify-content: center;
            align-items: center; */
    }

    p, li {
      color: var(--dark-gray);
      font-size: 1.45rem;
      font-weight: 500;
    }

    .top {
      margin-top: 1rem;
      margin-bottom: 2rem;
      text-align: center;
    }
    ul {
      width: 100%;
      list-style-type: circle;
      padding: 0rem 3rem;
      margin-bottom: 3rem;
    }
    .others {
      padding: 0rem 1.5rem;
      width: 100%;
      display: absolute;

      .reason {
        font-weight: 600;
        font-size: 1.45rem;
        color: var(--black);
      }
      .dropdown {
        background-color: transparent;
        color: var(--black-2);
        margin-top: 1.3rem;
        width: 300px;
        font-size: 1.35rem;
        font-weight: 500;
        cursor: pointer;
        padding: 0.75rem 0.45rem;
        border: 0.145rem solid #e1e1e1;
        border-radius: 4px;
      }
      .dropdown:hover {
        border: 0.145rem solid #ccc;
      }

      .dropdown:focus {
        outline: none;
      }

      .more {
        margin: 5rem 0;

        textarea {
          margin-top: 1.25rem;
          padding: 1rem;
          width: 80%;
          font-size: 1.4rem;
          font-weight: 500;
          border: 0.145rem solid #e1e1e1;
          border-radius: 4px;
          resize: none;
          font-family: 'Poppins';
        }
        textarea::placeholder {
          font-size: 1.4rem;
          color: var(--dark-gray);
        }
      }
    }
    .control {
      margin-top: 3rem;
      margin-right: -75%;
    }
  }
`;

const StyledNotification = styled.div`
  width: 100%;

  .notifications-selection {
    display: flex;
    flex-direction: column;
    margin-bottom: 6rem;

    li {
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: flex-start;
      ${'' /* margin-right: 1rem; */}
      margin: 1.25rem 0;

      input {
        height: 12px;
        width: 12px;
      }

      .container {
        display: flex;
        align-items: center;
        margin: 0 2rem;

        .checkbox,
        .checkbox-2 {
          opacity: 0;
          position: absolute;
        }

        label {
          border: 1px solid #ededed;
          transform: scale(1.5);
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 3.4rem;
          height: 1.85rem;
          position: relative;
          cursor: pointer;
          background-color: transparent;
          border-radius: 28px;

          .one {
            color: pink;
            font-size: 9px;
          }

          .two {
            color: yellow;
            font-size: 9px;
          }

          .ball {
            top: 1.5px;
            left: 1px;
            position: absolute;
            transition: transform 0.25s linear;
            height: 1.3rem;
            width: 1.3rem;
            border-radius: 50%;
            margin: 0 0.075rem;
          }
        }
      }

      .checkbox:checked + label .ball {
        transform: translateX(16px);
      }
      .checkbox-2:checked + label .ball-2 {
        transform: translateX(-16px);
      }
    }

    span,
    label {
      color: var(--dark-gray);
      font-size: 1.5rem;
      font-weight: 500;
      margin: 0.5rem 0;
    }
  }
  .controls {
    margin-top: 10rem;
  }
`;

const StyledSecuirity = styled.div`
  width: 100%;
  .info {
    margin-top: 1rem;
    p {
      font-size: 1.65rem;
      font-weight: 500;
    }
    span {
      width: 60%;
      font-size: 1.35rem;
      font-weight: 500;
      color: var(--dark-gray);
    }
  }

  form {
    margin-top: 3rem;
    margin-bottom: 6rem;

    .pwd {
      display: flex;
      flex-direction: column;
      margin: 2.5rem 0;
      color: var(--dark-gray);

      label {
        font-size: 1.375rem;
        font-weight: 500;
      }
      input {
        width: fit-content;
        padding: 0.25rem 0.75rem;
        font-size: 1.75rem;
        border: 0.145rem solid #e1e1e1;
        border-radius: 4px;
        margin-top: 1.2rem;
      }
      input:hover {
        border: 0.145rem solid #ccc;
      }
    }
  }

  .other {
    width: 100%;
    border-top: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    margin-bottom: 1.25rem;

    .contents {
      padding-left: 0rem;
      width: 80%;

      p {
        font-size: 1.65rem;
        font-weight: 500;
      }
      span {
        width: 60%;
        font-size: 1.35rem;
        font-weight: 500;
        color: var(--dark-gray);
      }
    }
    button {
      height: fit-content;
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--dark-gray);
      background-color: transparent;
      border: 1px solid #ccc;
      padding: 0.75rem 1.25rem;
      border-radius: 6px;
      cursor: pointer;
    }
  }
  .sms-recovery {
    button {
      padding: 0.75rem 2rem;
    }
  }
  .controls {
    margin-top: 10rem;
  }
`;

const StyledPayment = styled.div`
  width: 100%;

  .details {
    margin-top: 1rem;

    p {
      font-size: 1.7rem;
      font-weight: 600;
    }
    span {
      font-size: 1.35rem;
      font-weight: 500;
      color: var(--dark-gray);
    }
  }
  div {
    margin-top: 4rem;
    .top {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      width: 85%;

      p {
        font-size: 1.45rem;
        font-weight: 600;
      }
      .trash-icon {
        width: 25px;
        height: 25px;
        object-fit: cover;
        color: var(--dark-gray-1);
        cursor: pointer;
      }
    }
  }
  .payment-selection {
    width: 100%;

    .card {
      height: 100px;
      width: fit-content;
      border: 1px solid #e1e1e1;
      border-radius: 6px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 10rem;
      padding: 0.2rem 2.15rem;
      padding-bottom: 4.5rem;
      cursor: pointer;

      .holder {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 2rem;

        .image-wrapper {
          margin-bottom: 4rem;
        }

        .info {
          margin-bottom: 4.75rem;
          color: var(--primary);

          span {
            display: inline-block;
            color: var(--black);
            font-size: 1.5rem;
            font-weight: 500;
          }
          span.name {
            font-size: 1.25rem;
            color: var(--black);
          }
        }
      }
    }
  }
  .controls {
    margin-top: 10rem;
  }
`;

const StyledProfile = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  ${'' /* align-items: center; */}
  ${'' /* justify-content: center; */}

    .profile-image {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      font-size: 1.5rem;
      font-weight: 500;
    }
    .image-wrapper {
      margin-top: 1.75rem;
      position: relative;

      .upload-icon {
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: var(--light-blue);
        width: fit-content;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }

  .help-center-container {
    ${'' /* overflow: hidden; */}
    position: absolute;
    top: 2%;
    right: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .question-mark {
      transform: translateY(50%);
      ${'' /* position: absolute; */}
      left: -50%;
      z-index: 10000;
      background-color: var(--primary);
      top: -9%;
      height: 35px;
      width: 35px;
      border-radius: 50%;
      border: 2px solid #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2000;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

      span {
        font-weight: 700;
        color: #fff;
        font-size: 13px;
      }
    }

    .help-center {
      position: relative;
      ${
        '' /* top: 4%;
            right: 4%; */
      }
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: var(--primary);
      padding: 2px;
      padding-bottom: 4px;
      border-radius: 10px;
      width: 160px;
      height: 200px;
      overflow: hidden;

      .contents {
        text-align: center;
        color: #fff;
        width: 100%;
        ${'' /* margin-bottom: 0.7rem; */}
        z-index: 90;

        p {
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }
        span {
          font-size: 10px;
          display: inline-block;
          width: 90%;
        }
      }

      .overlay {
        position: absolute;
        bottom: -25%;
        right: -25%;
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(50px);
        height: 95px;
        width: 95px;
        border-radius: 50%;
      }
      .overlay-2 {
        position: absolute;
        top: -25%;
        left: -25%;
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(30px);
        height: 95px;
        width: 95px;
        border-radius: 50%;
      }

      button {
        background-color: #fff;
        width: 80%;
        border-radius: 4px;
        color: var(--black);
        padding: 0.65rem 1rem;
        font-size: 9px;
        font-weight: 600;
        cursor: pointer;
        z-index: 90;
      }
    }
  }

  .blurred {
    left: 0;
  }

  .photo-modal {
    width: 370px;
    padding: 1rem;
    margin-left: 7rem;

    span {
      color: black;
    }
  }

  .profile-details {
    margin-top: 3rem;
    width: 100%;

    .form-field {
      display: flex;
      flex-direction: column;
      margin-bottom: 3.5rem;

      label {
        font-size: 1.35rem;
        font-weight: 600;
        color: var(--dark-gray);
      }

      input {
        background-color: transparent;
        margin-top: 1rem;
        font-size: 1.3rem;
        color: var(--dark-gray);
        padding: 0.75rem 0.5rem;
        width: 300px;
        border: 1px solid #ededed;
        border-radius: 4px;
        font-weight: 500;
      }
    }
    .account-birth {
      input {
        cursor: pointer;
        font-family: 'Poppins';
      }
    }
    .gender {
      select {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 300px;
        padding: 0.75rem;
        border: 1px solid #ededed;
        border-radius: 6px;
        cursor: pointer;
        font-size: 1.3rem;
        color: var(--dark-gray);
      }
      select:focus {
        outline: none;
      }
    }
  }

  .controls {
    margin-top: 10rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10rem;
  }
`;

const StyledPolicy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .policies {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .policy {
      margin: 2rem 0;

      h2 {
        font-weight: 600;
        font-size: 1.65rem;
      }
      p {
        margin-top: 0.5rem;
        font-size: 1.25rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.675);
      }
    }
  }
`;

const PlainButton = styled.button`
  background-color: transparent;
  color: var(--dark-gray);
  font-size: 1.45rem;
  font-weight: 500;
  padding: 1rem 4rem;
  border: 1px solid #ccc;
  border-radius: 7px;
  cursor: pointer;
`;

const Button = styled.button`
  ${'' /* margin-top: 10rem; */}
  background-color: var(--primary);
  color: white;
  font-size: 1.25rem;
  font-weight: 500;
  padding: 1rem 2.85rem;
  border-radius: 6px;
  cursor: pointer;
`;

const DangerButton = styled.button`
  ${'' /* margin-top: 10rem; */}
  background-color: transparent;
  color: red;
  font-size: 1.25rem;
  font-weight: 500;
  padding: 0.75rem 1.25rem;
  border: 1px solid red;
  border-radius: 6px;
  cursor: pointer;
`;
const Danger = styled.button`
  ${'' /* margin-top: 10rem; */}
  background-color: red;
  color: white;
  font-size: 1.25rem;
  font-weight: 500;
  padding: 0.75rem 1.35rem;
  border-radius: 6px;
  cursor: pointer;
`;
const Plain = styled.button`
  ${'' /* margin-top: 10rem; */}
  background-color: transparent;
  color: var(--dark-gray);
  font-size: 1.25rem;
  font-weight: 500;
  padding: 0.755rem 1.35rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
`;

export const ball = `{
    .checkbox:checked + label .ball {
        transform: translateX(16px);
    }
}`;

export {
  StyledGeneral,
  StyledSettings,
  StyledSecuirity,
  Button,
  DangerButton,
  Danger,
  Plain,
  PlainButton,
  StyledNotification,
  StyledPayment,
  StyledProfile,
  StyledPolicy,
};

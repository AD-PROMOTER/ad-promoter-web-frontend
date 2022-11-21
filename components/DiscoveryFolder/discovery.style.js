import styled from 'styled-components';

export const Filterstyled = styled.div`
  background-color: var(--white);
  width: 100%;
  position: sticky;

  .searchFilter {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    gap: 1.2rem;
    font-size: 1.6rem;

    .search {
      position: relative;
      display: block;

      span {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        padding-left: 1.2rem;
      }
      input {
        padding: 1.2rem;
        border-radius: 0.8rem;
        padding-left: 6rem;
        border-width: 0.1rem;
        border-color: var(--light-primary);
        width: 55.4rem;
      }
    }
    .select {
      width: 28.1rem;
      padding: 1.2rem 2rem;
      border: 0.1rem solid var(--light-primary);
      border-radius: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    ul {
      background-color: var(--white);
      position: absolute;
      top: 9.5rem;
      right: 26.2rem;
      border-radius: 0.8rem;
      box-shadow: var(--shadow-1);
      width: 25rem;
      z-index: 10;

      li {
        padding: 1.2rem 2.4rem;
        border-bottom: 0.1rem solid #d9d9d9;
        cursor: pointer;
      }
    }
  }
`;
export const Container = styled.div`
  max-width: 123rem;
  margin: 0 auto;
  margin-top: 3rem;

  .jobs {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
  }
  .col1 {
    grid-column: span 2 / span 2;
  }
`;
export const Feed = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 3rem;
  background-color: var(--white);
  border-radius: 1.2rem;

  .type {
    padding: 2rem;

    .recAd {
      margin-top: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .recDirect {
        background-color: ${(props) => props.bg};
        color: white;
        padding: 0.4rem 1.6rem;
        border-radius: 2rem;
        font-weight: lighter;
        font-size: 1.4rem;
      }
      .recDot {
        cursor: pointer;
        position: relative;
        font-size: 1.4rem;

        ul {
          border-radius: 0.8rem;
          box-shadow: var(--shadow-1);
          background-color: var(--white);
          position: absolute;
          top: 0;
          right: 0;
          width: 22rem;

          li {
            padding: 1.2rem 2.4rem;
            border-bottom: 0.1rem solid #d9d9d9;
            cursor: pointer;
          }
        }
      }
    }
    .more {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .direct {
        background-color: ${(props) => props.bg};
        color: white;
        padding: 0.4rem 1.6rem;
        border-radius: 2rem;
        font-weight: lighter;
        font-size: 1.4rem;
      }
      .dot {
        cursor: pointer;
        position: relative;
        font-size: 1.4rem;

        ul {
          border-radius: 0.9rem;
          box-shadow: var(--shadow-1);
          background-color: var(--white);
          position: absolute;
          top: 0;
          right: 0;
          width: 20rem;
          li {
            padding: 1.2rem 2.4rem;
            border-bottom: 1px solid #dbd8fc;
            cursor: pointer;
            font-weight: 500;
            font-size: 14px;
            line-height: 18px;
            color: var(--black-1);
            /* padding: 0px 24px; */
          }
        }
      }
    }

    .adlink {
      margin-top: 3rem;
      margin-bottom: 2.4rem;
      .profile {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.2rem;
        /* margin-top: 1rem; */

        .tag {
          padding: 0.8rem 1.6rem;
          background-color: var(--light-gray);
          border-radius: 3rem;
        }
      }
    }

    .reclink {
      margin-top: 3rem;

      .stack {
        display: flex;
        flex-direction: column;

        .recProfile {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.2rem;

          .recTag {
            padding: 0.8rem 1.6rem;
            background-color: var(--light-gray);
            border-radius: 3rem;
          }
        }
      }
    }

    .recDesc {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 5rem;
      font-size: 1.5rem;

      .recAim {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        font-weight: bold;
        font-size: 1.6rem;
      }
      .recPara {
        color: var(--light-gray-1);
        font-size: 1.4rem;
      }
    }
    .desc {
      display: flex;
      align-items: center;
      gap: 10rem;
      margin-top: 5rem;

      .aim {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: bold;
        font-size: 1.6rem;
      }
      .para {
        color: var(--light-gray-1);
        font-size: 1.4rem;
      }
    }
    .recProduct {
      margin-top: 3rem;
      font-size: 1.6rem;
      P {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: var(--dark-gray);
        span {
          font-weight: bold;
        }
      }
    }

    .product {
      p {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: var(--dark-gray);
        span {
          font-weight: bold;
        }
      }
    }

    .time {
      display: flex;
      justify-content: space-between;
      margin-top: 5rem;
      align-items: center;

      .user {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        div {
          font-weight: bold;
          font-size: 1.4rem;
        }
      }

      p {
        font-size: 1.2rem;
        color: var(--light-gray-1);
      }
      .post {
        display: flex;
        align-items: center;
        gap: 2rem;

        .icons {
          cursor: pointer;
        }
      }
    }
    .recTime {
      display: flex;
      justify-content: space-between;
      margin-top: 5rem;
      align-items: center;

      .recUser {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        div {
          font-weight: bold;
          font-size: 1.4rem;
        }
      }

      p {
        font-size: 1.2rem;
        color: var(--light-gray-1);
      }
      .recPost {
        display: flex;
        align-items: center;
        gap: 2rem;

        .recIcons {
          cursor: pointer;
        }
      }
    }
    .recSubmit {
      display: flex;
      justify-content: center;
      margin-top: 3rem;

      .recPaste {
        position: relative;

        .recPasteLink {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          display: flex;
          align-items: center;
          padding-left: 1.2rem;
        }

        .recPasteButton {
          position: absolute;
          top: 0.5rem;
          right: 0.8rem;
          background-color: var(--light-blue);
          padding: 0.8rem 1.2rem;
          color: var(--white);
          border-radius: 0.8rem;
        }
        input {
          padding: 1.5rem 7rem;
          border: none;
          border-radius: 0.8rem;
          width: 100%;
          background-color: var(--light-gray-3);
        }
      }

      button {
        padding: 0.8rem 3rem;
        background-color: var(--primary);
        color: white;
        border-radius: 0.8rem;
        font-size: 1.6rem;
        cursor: pointer;
      }
    }

    .adImage {
      margin-top: 5rem;
    }

    .submit {
      display: flex;
      justify-content: center;
      margin-top: 3rem;

      .paste {
        position: relative;

        .pasteLink {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          display: flex;
          align-items: center;
          padding-left: 0.8rem;
        }

        .pasteButton {
          position: absolute;
          top: 0.7rem;
          right: 0.6rem;
          background-color: var(--light-blue);
          padding: 1rem;
          color: var(--white);
          border-radius: 1rem;
          max-width: 8.1rem;
          width: 100%;
          font-weight: 500;
          font-size: 13px;
          line-height: 20px;
        }
        input {
          padding-left: 6rem;
          padding-right: 10rem;
          border-radius: 0.8rem;
          background: #ffffff;
          border: 2px solid #ffffff;
          width: 47.376rem;
          /* width: 100%; */
          height: 5.6rem;
          /* height: 100%; */
          box-shadow: var(--shadow-1);
        }
      }

      button {
        padding: 0.8rem 3rem;
        background-color: var(--primary);
        color: white;
        border-radius: 0.8rem;
        cursor: pointer;
      }
    }
  }
`;

export const DiscoveryContainer = styled.div`
  .scroll-container {
    height: 100vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

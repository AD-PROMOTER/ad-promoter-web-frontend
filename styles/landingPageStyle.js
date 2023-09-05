import styled from 'styled-components';

export const LandingPageContainer = styled.div`
  padding: 2rem 5rem;
  @media (max-width: 425px) {
    padding: 1rem;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3.6rem;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2.9rem;
      width: 100%;
      h1 {
        font-family: 'Poppins';
        font-weight: 600;
        font-size: 2.4rem;
        line-height: 3.6rem;
        color: #0d0d0d;
        text-transform: capitalize;
      }
    }
    .body {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4rem;
      width: 100%;
      .ad-banner {
        background: #ffffff;
        border: 1px solid #5c85ff;
        box-shadow: 1.65263px 3.30526px 26.4421px rgba(0, 0, 0, 0.05);
        border-radius: 1.6rem;
        padding: 2.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10rem;
        width: 100%;
        @media (max-width: 768px) {
          gap: 8rem;
        }
        @media (max-width: 425px) {
          /* gap: 3rem; */
          flex-wrap: wrap;
          padding: 1rem;
        }
        .ad-type {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.8rem;
          /* @media (max-width:425px){
            width: 25%;
          } */
          .head {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 0.8rem;
            h3 {
              font-family: 'Poppins';
              font-style: normal;
              font-weight: 600;
              font-size: 1.2rem;
              line-height: 1.8rem;
              display: flex;
              align-items: center;
              text-align: center;
              color: #5c85ff;
              /* @media (max-width:425px){
                font-size: .8rem;
              } */
            }
          }
          p {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 1.2rem;
            line-height: 1.8rem;
            display: flex;
            align-items: center;
            text-align: center;
            color: #5c85ff;
            /* @media (max-width:425px){
              font-size: .8rem;
            } */
          }
        }
      }

      .desc {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4rem;
        &-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px;
          gap: 0.8rem;
          h3 {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 1.4rem;
            line-height: 2.1rem;
            display: flex;
            align-items: center;
            text-align: center;
            color: #0d0d0d;
          }
          p {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 2.1rem;
            display: flex;
            align-items: center;
            letter-spacing: -0.011em;
            color: #404040;
            width: 80%;
          }
          .btn {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 1.6rem 8rem;
            gap: 17.435rem;
            background: #ffffff;
            border: 1px solid #4f00cf;
            box-shadow: 1.65263px 3.30526px 26.4421px rgba(0, 0, 0, 0.05);
            border-radius: 0.991579rem;
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 1.4rem;
            line-height: 2rem;
            letter-spacing: -0.011em;
            color: #4f00cf;
            cursor: pointer;
          }
          a {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 2.1rem;
            display: flex;
            align-items: center;
            letter-spacing: -0.011em;
            color: #0f49f9;
          }
          .checkbox {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            gap: 1.6rem;
          }
        }
      }
    }
  }
`;

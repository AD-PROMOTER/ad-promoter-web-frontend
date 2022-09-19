import styled from 'styled-components';

export const StyledSideBar = styled.div`
    background-color: red;
    width: 217px;
    background: var(--white);
    box-shadow: var(--shadow-6);

    .container{
        margin-left: 1.3rem;
        height: 100%;
        padding-bottom: 2.5rem;

        .menu{
            padding-top: 2.5rem;
            margin-bottom: 10rem;
            >div{
                margin-bottom: 5rem;
                p{
                    margin-left: 1.5rem;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 21px;
                    color: var(--dark-gray);
                }
                >div{
                    display: flex;
                    align-items: center;
                    .side-line{
                        width: 4px;
                        height: 40px;
                        background-color: var(--primary);
                        border-radius: 100px;
                        /* margin-left: 3px; */
                    }
                    a{
                        display: flex;
                        width: 100%;
                        margin: 1.5rem 0;
                        padding: .6rem 1.5rem;
                        align-items: center;
                        gap: 0.75rem;
                        text-transform: capitalize;
                        color: var(--black-1);
                        font-weight: 500;
                        line-height: 27px;
                        font-size: 18px;
                        
                    }
                    .activeLink{
                        background: #F9F8FF;
                        font-weight: 700;
                        /* border-left: 4px solid var(--primary);
                        border-top-left-radius: 4px;
                        border-bottom-left-radius: 4px; */
                    }
                }
            }
        }

        .logout{
            display: flex;
            align-items: center;
            gap: 12px;
            padding-left: 1.2rem;
            margin-bottom: 5rem;
            p{
                font-weight: 500;
                font-size: 18px;
                line-height: 27px;
                color: var(--red);
            }
        }

        .bottom{
            background: linear-gradient(57.67deg, #0702FD 2.15%, #83F8E3 97.85%);
            border-radius: 10px;
            width: 188px;
            height: 217px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            margin-right: 1.2rem;
            h3{
                font-weight: 700;
                font-size: 2rem;
                line-height: 150%;
                letter-spacing: -0.03em;
                color: var(--white);
            }
            >div{
                display: flex;
                align-items: center;
                gap: 12px;
                p{
                    font-weight: 500;
                    font-size: 1.3rem;
                    line-height: 150%;
                    letter-spacing: -0.02em;
                    color: var(--white);
                }
            }
        }
    }
`
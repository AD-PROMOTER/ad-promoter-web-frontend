import styled from 'styled-components';

export const Visual = styled.div`
        display: flex;
        font-weight: 600;   
        font-size: 14px;
        color: #0d0d0d;
        align-items: center;
        margin-left: 48px;
        margin-top: 50px;

        #name {
            margin-left: 64px;
        }
        #email {
            margin-left: 171px;
        }
        #socials {
            margin-left: 202px;
        }
        #act {
            margin-left: 330px;
        }
        #trash {
            margin-left: 100px;
            width: 30px;
            height: 30px;
            font-weight: 600;
        }
`

export const Showcase = styled.div`
        margin-top: 50px;

        .showcase-contents {
            display: flex;
            align-items: center;
            margin-left: 38px;
            width: 1230px;
            height: 64px;
            background: #ffffff;
            margin-bottom: 24px;
            padding-left: 17px;
            border-radius: 10px;
            font-size: 14px;
            color: #333333;

            #avatar {
                height: 25px;
                width: 25px;
                border-radius: 100px;
                border: 1px solid #000;
                padding-top: 5px;
                padding-left: 3.5px;
                font-weight: bold;
                background: black;
                color: #fff;
                margin-left: 70px;
            }
            #avatars {
                height: 25px;
                width: 25px;
                border-radius: 100px;
                border: 1px  #000;
                font-weight: bold;
                margin-left: 70px;
            }
            #name{
                margin-left: 8px;
                width: 122px;
            }
            #email {
                margin-left: 55px;
                width: 206px;
            }
            #link {
                margin-left: 95px;
                width: 378px;
            }
            #del {
                margin-left: 20px;
            }
            #mark {
                margin-left: 40px;
            }
            #check {
                margin-left: 68px;
            }
        }
`
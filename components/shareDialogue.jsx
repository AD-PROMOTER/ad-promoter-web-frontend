import React from 'react';
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton } from 'react-share';
import styled from 'styled-components';
// import { TwitterShareButton, FacebookShareButton, LinkedInShareButton } from 'react-share';

const ModalContainer = styled.div`
  /* background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  /* border-radius: 4px; */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  /* padding: 20px;
  width: 300px; */
`;
const ShareDialogueContainer = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  /* position: absolute;
  top: 30%; */
  /* bottom: 0; */
  /* left: 35%; */
  /* right: 0; */
`;

const ShareDialogueTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ShareDialogueText = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

const ShareDialogueButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ShareDialogueButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 10px;
`;

const ShareDialogue = ({ onClose,shareUrl,title,imageUrl,description }) => {
  const handleShare = (platform) => {
    // Implement your share logic here based on the selected platform
    console.log(`Sharing on ${platform}...`);
  };

  return (
    <ModalContainer>

        <ShareDialogueContainer>
        <ShareDialogueTitle>Share Dialogue</ShareDialogueTitle>
        <ShareDialogueText>Share this content with others.</ShareDialogueText>
        
        <ShareDialogueButtonContainer>
            <ShareDialogueButton onClick={() => handleShare('Facebook')}>
                <TwitterShareButton url={shareUrl} title={title} imageUrl={imageUrl} description={description}>
                    Share on Twitter
                </TwitterShareButton>
            </ShareDialogueButton>

            <ShareDialogueButton onClick={() => handleShare('Twitter')}>
                <FacebookShareButton url={shareUrl} quote={title} imageUrl={imageUrl} description={description}>
                    Share on Facebook
                </FacebookShareButton>        
            </ShareDialogueButton>

            <ShareDialogueButton onClick={() => handleShare('LinkedIn')}>
                <WhatsappShareButton url={shareUrl} title={title} imageUrl={imageUrl} description={description}>
                    Share on Whatsapp
                </WhatsappShareButton>        
            </ShareDialogueButton>
        </ShareDialogueButtonContainer>

        <ShareDialogueButton onClick={onClose}>Close</ShareDialogueButton>
        </ShareDialogueContainer>
    </ModalContainer>
  );
};

export default ShareDialogue;

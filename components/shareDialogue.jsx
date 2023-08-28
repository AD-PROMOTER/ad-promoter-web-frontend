import { useState } from 'react';
import styled, { keyframes }  from 'styled-components';
import { FiTwitter, FiFacebook } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useRouter } from 'next/router';

const ShareButton = styled.button`
  padding: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ShareDialogueContainer = styled.div`
  /* display: ${(props) => (props.open ? 'block' : 'none')}; */
  position: absolute;
  top: 40%;
  left: 70%;
  width: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Icon = styled.div`
  margin-right: 1rem;
`;

const ShareDialogueContent = styled.div``;

const ShareDialogue = ({shareLink}) => {
  // const shareLink = window.location.href;
  const router = useRouter();

  const shareToTwitter = () => {
    const shareUrl = `https://twitter.com/share?url=${encodeURIComponent(shareLink)}`;
    window.open(shareUrl, '_blank');
  };

  const shareToFacebook = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`;
    window.open(shareUrl, '_blank');
  };

  const shareToWhatsApp = () => {
    const shareUrl = `whatsapp://send?text=${encodeURIComponent(shareLink)}`;
    window.open(shareUrl, '_blank');
  };

  return (
    <>
      {/* <ShareButton>Share</ShareButton> */}
      <ShareDialogueContainer>
        <ShareDialogueContent>
          <SocialIcon>
            <Icon>
              <FiTwitter size={20} />
            </Icon>
            <button onClick={shareToTwitter}>Share on Twitter</button>
          </SocialIcon>
          <SocialIcon>
            <Icon>
              <FiFacebook size={20} />
            </Icon>
            <button onClick={shareToFacebook}>Share on Facebook</button>
          </SocialIcon>
          <SocialIcon>
            <Icon>
              <FaWhatsapp size={20} />
            </Icon>
            <button onClick={shareToWhatsApp}>Share on Whatsapp</button>
          </SocialIcon>
        </ShareDialogueContent>
      </ShareDialogueContainer>
    </>
  );
};

export default ShareDialogue;

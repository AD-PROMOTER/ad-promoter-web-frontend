// import Head from 'next/head'
import Link from 'next/link';
import logo from '@/public/assets/newest-logo.png';
import bg from '@/public/assets/onboard-bg.png';
// import logo from '@/public/assets/onboarding-logo.svg';
import adlogo from '@/public/assets/newOnboardLogo.svg';
import Image from 'next/image';
import hero from '@/public/assets/onboarding-hero.jpg';
import SocialBtn from '@/components/socialMediaBtn/index';
import google from '@/public/assets/google.svg';
import fb from '@/public/assets/fb.svg';
import apple from '@/public/assets/apple.svg';
import caret from '@/public/assets/caret.svg';
import SignupBtn from '@/components/authBtn/index';
import {
  StyledContent,
  StyledMobile,
  StyledNav,
  StyledOnboarding,
  StyledTab,
} from '@/styles/onboard';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { BgContainer } from '@/components/onboardingBg/styles';
import { Overlay } from '@/styles/signup';
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.prefetch('/signup');
  }, [router]);
  return (
    <>
      <StyledOnboarding>
        <StyledNav>
          <div className="logo">
            <Link href="/">
              <a>
                <Image src={logo} width={184} height={19} alt="ad-promoter" />
              </a>
            </Link>
          </div>

          <div className="cta">
            <div className="lang">
              <p>English (United States)</p>
              <Image src={caret} alt="caret" />
            </div>
            <div className="login-btn">
              <Link href="/login">
                <a>Log in</a>
              </Link>
            </div>
          </div>
        </StyledNav>

        <StyledContent>
          <div className="onboard-text-container">
            <div className="onboard-text-container-head">
              <h2>Explore the world of Seamless Online promotion</h2>
              <p>
                On AD-Promoter, place adverts that converts into clicks and
                unique visitors on your website.
              </p>
            </div>
            <div className="onboard-text-container-subhead">
              <div className="socials">
                <SocialBtn icon={google} text="Google" />
                <SocialBtn icon={fb} text="Facebook" />
              </div>
              <div className="divider">
                <div></div>
                <p>OR</p>
                <div></div>
              </div>
              <div className="onboard-text-container-subhead-bottom">
                <SignupBtn text="Sign up with email" path="/signup" />
                <div className="terms">
                  <p>
                    By signing up, you agree to the{' '}
                    <Link href="#" passHref>
                      <a>Terms of Service</a>
                    </Link>{' '}
                    and{' '}
                    <Link href="#" passHref>
                      <a>Privacy Policy</a>
                    </Link>
                    , including{' '}
                    <Link href="#" passHref>
                      <a>cookie use.</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="onboard-image">
            <Image src={hero} alt="hero image" />
          </div>
        </StyledContent>
      </StyledOnboarding>
      <StyledMobile>
        <div className="logo">
          <Image src={adlogo} alt="ad-promoter logo" />
        </div>
        <div className="note">
          <h3>Explore the world of Seamless Online promotion</h3>
          <p>
            On AD-Promoter, place adverts that converts into clicks and unique
            visitors on your website.
          </p>
        </div>
        <div className="socials">
          <SocialBtn icon={google} text="Google" />
          <SocialBtn icon={fb} text="Facebook" />
        </div>
        <div className="divider">
          <div></div>
          <p>or</p>
          <div></div>
        </div>
        <div className="signup">
          <SignupBtn text="Sign up with email" path="/signup" />
        </div>
        <div className="login">
          <Link href="/login">
            <a>Log in</a>
          </Link>
        </div>
        <div className="terms">
          <p>
            By signing up, you agree to the{' '}
            <Link href="#" passHref>
              <a>Terms of Service</a>
            </Link>{' '}
            and{' '}
            <Link href="#" passHref>
              <a>Privacy Policy</a>
            </Link>
            , including{' '}
            <Link href="#" passHref>
              <a>cookie use.</a>
            </Link>
          </p>
        </div>
      </StyledMobile>
      <StyledTab>
        <StyledNav>
          <div className="logo">
            <Link href="/">
              <a>
                <Image src={logo} alt="ad-promoter" />
              </a>
            </Link>
          </div>

          <div className="cta">
            <div className="lang">
              <p>English (United States)</p>
              <Image src={caret} alt="caret" />
            </div>
            <div className="login-btn">
              <Link href="/login">
                <a>Log in</a>
              </Link>
            </div>
          </div>
        </StyledNav>
        <BgContainer image={bg}>
          <Overlay className="overlay">
            <div className="onboard-text">
              <h2>Explore the world of Seamless Online promotion</h2>
              <p>
                On AD-Promoter, place adverts that converts into clicks and
                unique visitors on your website.
              </p>
            </div>
            <div className="socials">
              <SocialBtn icon={google} text="Google" />
              <SocialBtn icon={fb} text="Facebook" />
            </div>
            <div className="divider">
              <div className="line"></div>
              <p>OR</p>
              <div className="line"></div>
            </div>
            <div className="signup">
              <SignupBtn text="Sign up with email" path="/signup" />
              <div className="terms">
                <p>
                  By signing up, you agree to the{' '}
                  <Link href="#" passHref>
                    <a>Terms of Service</a>
                  </Link>{' '}
                  and{' '}
                  <Link href="#" passHref>
                    <a>Privacy Policy</a>
                  </Link>
                  , including{' '}
                  <Link href="#" passHref>
                    <a>cookie use.</a>
                  </Link>
                </p>
              </div>
            </div>
          </Overlay>
        </BgContainer>
      </StyledTab>
    </>
  );
}

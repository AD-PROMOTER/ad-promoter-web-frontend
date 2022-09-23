// import Head from 'next/head'
import Link from 'next/link';
import logo from '@/public/assets/ad-logo.svg';
import Image from 'next/image';
import hero from '@/public/assets/onboarding-hero.svg';
import SocialBtn from '@/components/socialMediaBtn/index';
import google from '@/public/assets/google.svg';
import fb from '@/public/assets/fb.svg';
import apple from '@/public/assets/apple.svg';
import caret from '@/public/assets/caret.svg';
import { StyledContent, StyledNav, StyledOnboarding } from '@/styles/onboard';
export default function Home() {
  return (
    <StyledOnboarding>
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
          <div className="login-btn">Log in</div>
        </div>
      </StyledNav>

      <StyledContent>
        <div className="onboard-text-container">
          <div className="onboard-text-container-head">
            <h2>Explore the world of Seamless Online promotion</h2>
            <p>
              On AD-Promoter, place adverts that converts into clicks and unique
              visitors on your website.
            </p>
          </div>
          <div className="onboard-text-container-subhead">
            <div className="socials">
              <SocialBtn icon={google} text="Google" />
              <SocialBtn icon={fb} text="Facebook" />
              <SocialBtn icon={apple} text="Apple" />
            </div>
            <div className="divider">
              <div></div>
              <p>OR</p>
              <div></div>
            </div>
            <div className="onboard-text-container-subhead-bottom">
              <div className="cta">
                <Link href="/signup" passHref>
                  <a>
                    <p>Sign up with email</p>
                  </a>
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
            </div>
          </div>
        </div>
        <div className="onboard-image">
          <Image src={hero} alt="hero image" />
        </div>
      </StyledContent>
    </StyledOnboarding>
  );
}

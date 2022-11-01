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
import SignupBtn from '@/components/authBtn/index';
import { StyledContent, StyledNav, StyledOnboarding } from '@/styles/onboard';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.prefetch('/signup');
  }, [router]);
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
              On AD-Promoter, place adverts that converts into clicks and unique
              visitors on your website.
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
  );
}

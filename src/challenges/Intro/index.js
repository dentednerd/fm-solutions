import styled from 'styled-components';
import Layout from '../../templates/Layout';
import Item from './Item';
import {
  ProfileMobile,
  ProfileDesktop,
  AccordionMobile,
  AccordionDesktop,
  ArticleMobile,
  ArticleDesktop,
  SocialMobile,
  SocialDesktop,
  BootcampMobile,
  BootcampDesktop
} from './screenshots';
import './index.css';

const StyledIntro = styled(Layout)`
  display: flex;
  flex-flow: column nowrap;
  background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);
  color: #333;

  .wrapper {
    max-width: calc((3*20vw) + 5rem);
    margin: 0 auto;
  }

  .site-title {
    width: 100%;
    margin: 2rem auto;
    font-family: 'Kumbh Sans', sans-serif;
  }

  h1 {
    margin-bottom: 1.5rem;
  }

  p {
    margin-bottom: 0.5rem;

    a {
      text-decoration: none;
      color: rebeccapurple;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: #333;
        transition: color 0.2s ease-in-out;
      }
    }
  }
`;

const ScreenshotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, auto);
  gap: 1rem;
  color:  #fff;
  font-family: 'Ubuntu', sans-serif;
  width: 100%;
  padding: 0;
  margin: 0 auto;

  @media(min-width: 768px) {
    grid-template-columns: repeat(3, 20vw);
    grid-template-rows: auto auto auto;
  }
`;

const Intro = () => {
  return (
    <StyledIntro id="intro" noBackToTop>
      <div className="wrapper">
        <div className="site-title">
          <h1>Joey's Frontend Mentor Solutions</h1>
          <p>Howdy! I'm <a href="https://joeyimlay.dev">Joey</a>, and these are my solutions to some of the newbie-level challenges on <a href="https://www.frontendmentor.io">Frontend Mentor</a>.</p>
        </div>
        <ScreenshotGrid>
          <Item href="#profile" mobileSrc={ProfileMobile} desktopSrc={ProfileDesktop} alt="Profile Card" />
          <Item href="#accordion" mobileSrc={AccordionMobile} desktopSrc={AccordionDesktop} alt="Accordion Card" />
          <Item href="#social" mobileSrc={SocialMobile} desktopSrc={SocialDesktop} alt="Social Proof" />
          <Item href="#article" mobileSrc={ArticleMobile} desktopSrc={ArticleDesktop} alt="Article Preview" />
          <Item href="#bootcamp" mobileSrc={BootcampMobile} desktopSrc={BootcampDesktop} alt="Bootcamp Testimonials" />
          {/* four card feature */}
          {/* base apparel */}
          {/* intro sign up */}
          {/* single price grid */}
          {/* ping coming soon */}
          {/* huddle */}
          {/* three column preview */}
        </ScreenshotGrid>
      </div>
    </StyledIntro>
  );
}

export default Intro;

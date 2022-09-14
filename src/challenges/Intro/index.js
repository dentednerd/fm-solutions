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

  h1 {
    grid-column: 1 / 3;
    text-align: center;
    font-family: 'Zilla Slab', serif;
    margin: 2rem auto;
    color: #af5097;
    text-shadow: 0 -1px 1px #fef9d7, 0px 1px 1px #69305b, 0.125rem 0.125rem 0.125rem #cf96c0;

    @media(min-width: 768px) {
      grid-column: 1 / 4;
      font-size: 3rem;
    }
  }

  p {
    margin-bottom: 0.5rem;
    color: #69305b;

    a {
      text-decoration: none;
      color: #af5097;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: #69305b;
        transition: color 0.2s ease-in-out;
      }
    }
  }
`;

const ScreenshotGrid = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, calc((100vw - 3rem) / 2));
  grid-template-rows: repeat(6, auto);
  gap: 1rem;
  font-family: 'Ubuntu', sans-serif;
  width: calc(100vw - 2rem);
  padding: 0;
  margin: 0 auto;

  @media(min-width: 768px) {
    grid-template-columns: repeat(3, calc((100vw - 4rem) / 3));
  }
`;

const IntroText = styled.section`
  display: grid;
  place-items: center;
  aspect-ratio: 1/2;
  color: black;
  padding: 1rem;
  text-align: center;
  overflow-x: hidden;

  @media(min-width: 768px) {
    aspect-ratio: 2/1;
  }
`;

const Intro = () => {
  return (
    <StyledIntro id="intro" noBackToTop>
      <div className="wrapper">
        <ScreenshotGrid>
          <h1>
            Joey's Frontend Mentor Solutions
          </h1>
          <IntroText>
            <p>Howdy! I'm <a href="https://joeyimlay.dev">Joey</a>, and these are my solutions to some of the newbie-level challenges on <a href="https://www.frontendmentor.io">Frontend Mentor</a>.</p>
          </IntroText>
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

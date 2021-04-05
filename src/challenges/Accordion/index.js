import styled from 'styled-components';
import Layout from '../../templates/Layout';
import Item from './Item';
import { bgDesktop, bgMobile, box, womanDesktop, womanMobile } from './images';
import { tokens } from './tokens';

const StyledLayout = styled(Layout)`
  background-image: linear-gradient(${tokens.bgViolet}, ${tokens.bgBlue});
`;

const StyledAccordion = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 2rem;
  width: calc(100vw - 2rem);
  max-width: 56rem;
  box-shadow: 0 1rem 2rem ${tokens.textPrimaryBlue};
  font-family: "Kumbh Sans", sans-serif;
  margin: 0 1rem;
  font-size: 12px;

  @media(min-width: 768px) {
    flex-flow: row nowrap;
    font-size: 12px;
  }

  div.floating-box {
    display: none;

    @media(min-width: 768px) {
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateX(-55%) translateY(-30%);
      z-index: 3;
    }
  }

  div.illustration {
    height: 6.5rem;
    text-align: center;
    margin: 0;
    padding: 0;
    background-image: url(${bgMobile});
    background-size: 14rem auto;
    background-repeat: no-repeat;
    background-position: top center;

    @media(min-width: 768px) {
      flex: 1;
      display: flex;
      margin: 0;
      padding: 0 3rem 0 0;
      height: auto;
      align-items: center;
      background-image: url(${bgDesktop});
      padding-right: 5.75rem;
      background-size: initial;
      background-repeat: no-repeat;
      background-position: -37rem center;
      overflow: hidden;
    }

    img.mobile {
      width: 15rem;
      transform: translateX(-1rem) translateY(calc(-50% - 0.5rem));

      @media(min-width: 768px) {
        display: none;
      }
    }

    img.desktop {
      display: none;

      @media(min-width: 768px) {
        display: block;
        margin: 0;
        padding: 0;
        transform: translateX(-6rem);
      }
    }
  }

  section.content {
    padding: 0 1.5rem 3rem 1.5rem;

    h1 {
      text-align: center;
      font-size: 2rem;
      padding-bottom: 1rem;
    }

    @media(min-width: 768px) {
      flex: 1;
      padding: 3rem 2rem;

      h1 {
        text-align: left;
        padding-bottom: 2rem;
      }
    }
  }
`;

const Accordion = () => {
  return (
    <StyledLayout id="accordion" solution="https://www.frontendmentor.io/solutions/mobilefirst-faq-accordion-card-with-sass-fEUro54g2">
      <StyledAccordion>
        <div className="floating-box">
          <img src={box} alt="floating box" />
        </div>

        <div className="illustration">
          <img className="desktop" src={womanDesktop} alt="woman online desktop" />
          <img className="mobile" src={womanMobile} alt="woman online mobile" />
        </div>

        <section className="content">
          <h1>FAQ</h1>

          <div className="accordion">
            <Item
              question="How many team members can I invite?"
              answer="You can invite up to 2 additional users on the Free plan. There is no limit on
              team members for the Premium plan."
            />
            <Item
              question="What is the maximum file upload size?"
              answer="No more than 2GB. All files in your account must fit your allotted storage space."
            />
            <Item
              question="How do I reset my password?"
              answer="Click “Forgot password” from the login page or “Change password” from your profile page.
              A reset link will be emailed to you."
            />
            <Item
              question="Can I cancel my subscription?"
              answer="Yes! Send us a message and we’ll process your request no questions asked."
            />
            <Item
              question="Do you provide additional support?"
              answer="Chat and email support is available 24/7. Phone lines are open during normal business hours."
            />
          </div>

        </section>
      </StyledAccordion>
    </StyledLayout>
  )
}

export default Accordion;

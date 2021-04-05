import styled from 'styled-components';
import Layout from '../../templates/Layout';
import {
  IconNext,
  IconPrev,
  ImageJohn,
  ImageTanya,
  Bg,
  Curve,
  Quotes
} from './images';

const StyledBootcamp = styled(Layout)`
  position: relative;
  background-image: url(${Curve});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left bottom;
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  color: hsl(240, 38%, 20%);
  line-height: normal;
  height: 100vh;
  overflow: hidden;

  @media(min-width: 768px) {
    background-size: 50%;
  }

  main.bootcamp {
    position: relative;

    @media(min-width: 768px) {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
      padding: 1rem 2rem;
      overflow: hidden;
    }

    div.testimonial {
      display: none;
      padding: 1rem;

      &.visible {
        display: block;

        @media(min-width: 768px) {
          position: relative;
          top: 0;
          transform: translateY(0);
          display: grid;
          grid-template-columns: 40% 60%;
          padding: 0;
          align-items: center;
        }
      }
    }

    div.portrait {
      position: relative;
      background-image: url(${Bg});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      padding: 2.5rem;
      height: min-content;

      @media(min-width: 768px) {
        grid-column: 2/3;
        padding: 3rem;
      }

      img {
        display: block;
        border-radius: 0.5rem;
        max-width: 100%;
        box-shadow: 0 1rem 1.5rem -1rem hsl(240, 38%, 20%);
      }

      div.slider {
        position: absolute;
        bottom: 1.5rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        border-radius: 24px;
        width: 5rem;
        padding: 0.75rem;
        box-shadow: 0 1rem 1.5rem -1rem hsl(240, 38%, 20%);

        @media(min-width: 768px) {
          bottom: 0;
          left: 0;
          transform: translate(16vw, -2rem);
        }
      }
    }

    div.text {
      @media(min-width: 768px) {
        grid-column: 1/2;
        grid-row: 1;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        transform: translateX(25%);
      }

      div.quote {
        background-image: url(${Quotes});
        background-repeat: no-repeat;
        background-position: center top;
        text-align: center;
        font-weight: 300;
        font-size: 20px;
        padding: 2rem 0;

        @media(min-width: 768px) {
          position: relative;
          background-position: 20% top;
          font-size: 32px;
          text-align: left;
          width: 115%;
          padding: 4rem 0;
        }
      }

      div.student {
        text-align: center;
        font-size: 16px;

        @media(min-width: 768px) {
          display: flex;
          flex-flow: row nowrap;
        }

        h2 {
          font-size: 16px;
          font-weight: 700;

          @media(min-width: 768px) {
            margin-right: 0.5rem;
          }
        }

        h3 {
          font-size: 16px;
          font-weight: 500;
          color: hsl(240, 18%, 77%);
        }
      }
    }
  }
`;

const slide = () => {
  var elements = document.getElementsByClassName('visible');
  Array.from(elements).forEach((element) => {
    Array.from(element.parentNode.childNodes).forEach((sibling) => {
      sibling.classList && sibling.classList.toggle('visible');
    });
  });
}

const Bootcamp = () => {
  return (
    <StyledBootcamp id="bootcamp" solution="https://www.frontendmentor.io/solutions/coding-bootcamp-testimonials-solution-using-sass-DungPw5JD">
      <main className="bootcamp">
        <div className="testimonial tanya visible">
          <div className="portrait">
            <img src={ImageTanya} alt="Tanya" />
            <div className="slider">
              <img src={IconPrev} alt="previous" onClick={() => slide()} />
              <img src={IconNext} alt="next" onClick={() => slide()} />
            </div>
          </div>
          <div className="text">
            <div className="quote">
              “ I’ve been interested in coding for a while but never taken the jump, until now.
              I couldn’t recommend this course enough. I’m now in the job of my dreams and so
              excited about the future. ”
            </div>
            <div className="student">
              <h2>Tanya Sinclair</h2>
              <h3>UX Engineer</h3>
            </div>
          </div>
        </div>

        <div className="testimonial john">
          <div className="portrait">
            <img src={ImageJohn} alt="John" />
            <div className="slider">
              <img src={IconPrev} alt="previous" onClick={() => slide()} />
              <img src={IconNext} alt="next" onClick={() => slide()} />
            </div>
          </div>
          <div className="text">
            <div className="quote">
              “ If you want to lay the best foundation possible I’d recommend taking this course.
              The depth the instructors go into is incredible. I now feel so confident about
              starting up as a professional developer. ”
            </div>
            <div className="student">
              <h2>John Tarkpor</h2>
              <h3>Junior Front-end Developer</h3>
            </div>
          </div>
        </div>
      </main>
    </StyledBootcamp>

  );
}

export default Bootcamp;

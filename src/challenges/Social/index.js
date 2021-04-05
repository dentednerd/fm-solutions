import styled from 'styled-components';
import Layout from '../../templates/Layout';
import { tokens } from './tokens';
import {
  DeskBottom,
  DeskTop,
  MobBottom,
  MobTop,
  Star,
  Anne,
  Colton,
  Irene
} from './images';

const StyledSocial = styled(Layout)`
  position: relative;
  font-family: 'Spartan', sans-serif;
  font-size: 15px;
  line-height: normal;
  color: ${tokens.vDarkMagenta};
  min-height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  @media(min-width: 768px) {
    height: 100vh;
  }

  .background-top {
    height: 0;
    width: 0;

    .mobile {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }

    .desktop {
      display: none;
    }

    @media(min-width: 768px) {
      .mobile {
        display: none;
      }

      .desktop {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }

  .background-bottom {
    height: 0;
    width: 0;

    .mobile {
      display: block;
      position: absolute;
      bottom: 0;
      right: 0;
    }

    .desktop {
      display: none;
    }

    @media(min-width: 768px) {
      .mobile {
        display: none;
      }

      .desktop {
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }

  main {
    text-align: center;
    margin: 4rem 1rem;

    @media(min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, auto);
      column-gap: 7rem;
      row-gap: 3rem;
      width: calc(100% - 16rem);
    }

    section.text {
      @media(min-width: 768px) {
        text-align: left;
      }

      h1 {
        font-size: 2rem;
        font-weight: 700;
        margin: 0 1rem 2rem;

        @media(min-width: 768px) {
          font-size: 3rem;
          margin: 0 0 2rem;
        }
      }

      p {
        line-height: 1.5rem;
      }
    }

    section.ratings {
      margin: 2rem 0;

      @media(min-width: 768px) {
        width: 37rem;
      }

      div.rated {
        background-color: ${tokens.lightGrayishMagenta};
        border-radius: 0.5rem;
        padding: 1rem;
        margin-bottom: 1rem;
        font-weight: 700;

        @media(min-width: 768px) {
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
          align-items: center;
          width: max-content;
          padding: 1.25rem 2rem;
          width: 31rem;

          &:nth-of-type(2) {
            margin-left: 3rem;
          }

          &:nth-of-type(3) {
            margin-left: 6rem;
          }
        }

        div.stars {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          width: 8rem;
          height: 1rem;
          margin: 0 auto 1rem;

          @media(min-width: 768px) {
            margin: 0 2rem 0 0;
          }
        }
      }
    }

    section.reviews {
      @media(min-width: 768px) {
        grid-column: 1/3;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        height: 18rem;
      }

      div.review {
        background-color: ${tokens.vDarkMagenta};
        color: ${tokens.white};
        border-radius: 0.5rem;
        padding: 2.5rem;
        margin-bottom: 1rem;
        text-align: left;

        @media(min-width: 768px) {
          height: 16rem;
          margin-bottom: 0;

          &:nth-of-type(2) {
            margin-top: 1rem;
          }

          &:nth-of-type(3) {
            margin-top: 2rem;
          }
        }

        div.reviewer {
          display: grid;
          grid-template-columns: max-content 1fr;
          grid-template-rows: repeat(2, 1.25rem);
          column-gap: 1rem;
          row-gap: 0.25rem;
          margin-bottom: 2rem;

          img {
            grid-row: 1/3;
            border-radius: 50%;
            height: 100%;
          }

          h2 {
            grid-row: 1/2;
            grid-column: 2/3;
            font-size: 1rem;
            font-weight: 700;
            line-height: 1.25rem;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
          }

          p {
            color: ${tokens.softPink};
            line-height: 1.25rem;

          }
        }

        p {
          font-size: 13px;
          line-height: 1.5rem;
        }
      }
    }
  }
`;

const Social = () => {
  return (
    <StyledSocial id="social" solution="https://www.frontendmentor.io/solutions/social-proof-solution-using-sass-cZ6V9znk9">
      <div class="background-top">
        <img src={MobTop} class="mobile" alt="bg" />
        <img src={DeskTop} class="desktop" alt="bg" />
      </div>
      <div class="background-bottom">
        <img src={MobBottom} class="mobile" alt="bg" />
        <img src={DeskBottom} class="desktop" alt="bg" />
      </div>
      <main>
        <section class="text">
          <h1>10,000+ of our users love our products.</h1>

          <p>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
        </section>

        <section class="ratings">
          <div class="rated">
            <div class="stars">
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
            </div>
            Rated 5 Stars in Reviews
          </div>
          <div class="rated">
            <div class="stars">
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
            </div>
            Rated 5 Stars in Report Guru
          </div>
          <div class="rated">
            <div class="stars">
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
            </div>
            Rated 5 Stars in BestTech
          </div>
        </section>

        <section class="reviews">
          <div class="review">
            <div class="reviewer">
              <img src={Colton} alt="Colton Smith" />
              <h2>Colton Smith</h2>
              <p>Verified Buyer</p>
            </div>
            <p>
              "We needed the same printed design as the one we had ordered a week prior.
              Not only did they find the original order, but we also received it in time.
              Excellent!"
            </p>
          </div>

          <div class="review">
            <div class="reviewer">
              <img src={Irene} alt="Irene Roberts" />
              <h2>Irene Roberts</h2>
              <p>Verified Buyer</p>
            </div>
            <p>
              "Customer service is always excellent and very quick turn around. Completely
              delighted with the simplicity of the purchase and the speed of delivery."
            </p>
          </div>

          <div class="review">
            <div class="reviewer">
              <img src={Anne} alt="Anne Wallace" />
              <h2>Anne Wallace</h2>
              <p>Verified Buyer</p>
            </div>
            <p>
              "Put an order with this company and can only praise them for the very high
              standard. Will definitely use them again and recommend them to everyone!"
            </p>
          </div>
        </section>
      </main>
    </StyledSocial>
  );
}

export default Social;

import styled from 'styled-components';
import { tokens } from './tokens.js';
import {
  Avatar,
  Drawers,
  Facebook,
  Pinterest,
  Twitter
} from './images';
import Layout from '../../templates/Layout';

const StyledArticle = styled(Layout)`
  background-color: ${tokens.lightGrayBlue};
  font-family: 'Manrope', sans-serif;
  font-size: 13px;
  font-weight: 500;
  padding: 1rem;

  article {
    border-radius: 0.5rem;
    background-color: white;
    color: ${tokens.darkGrayBlue};
    width: 326px;
    box-shadow: 0 1rem 2rem #c5cfdb;

    @media(min-width: 768px) {
      display: grid;
      width: 732px;
      grid-template-columns: 19rem 1fr;
    }

    header {
      img {
        place-self: center;
        height: 100%;
        max-height: 14rem;
        width: 100%;
        object-fit: cover;
        overflow: hidden;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;

        @media(min-width: 768px) {
          max-height: 100%;
          border-top-right-radius: 0;
          border-bottom-left-radius: 0.5rem;
        }
      }
    }

    div.text {
      padding: 2rem 2rem 1rem;

      h1 {
        font-weight: 700;
        margin-bottom: 1rem;

        @media(min-width: 768px) {
          font-size: 20px;
          margin-bottom: 1rem;
        }
      }

      p {
        color: ${tokens.darkBlue};
        line-height: 1.5rem;
        font-size: 13.25px;
      }
    }

    footer {
      position: relative;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      height: 72px;
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;

      @media(min-width: 768px) {
        padding-bottom: 2rem;
      }

      div.activate {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        grid-row: 1/3;
        place-self: center;
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        background-color: ${tokens.lightGrayBlue};

        svg {
          height: 0.75rem;
          fill: ${tokens.darkGrayBlue};
        }
      }

      div.author {
        display: grid;
        grid-template-columns: max-content max-content;
        grid-template-rows: repeat(2, auto);
        height: 2.5rem;
        width: 100%;

        img.avatar {
          grid-row: 1/3;
          height: 2.5rem;
          width: 2.5rem;
          border-radius: 50%;
        }

        p {
          margin-left: 1rem;
          line-height: 1rem;

          &.name {
            grid-row: 1/2;
            font-weight: 700;
            color: ${tokens.darkGrayBlue};
          }


          &.date {
            grid-row: 2/3;
            color: ${tokens.darkBlue};
          }
        }
      }

      div.share {
        display: none;
      }

      &.active {
        background-color: ${tokens.darkGrayBlue};

        @media(min-width: 768px) {
          background-color: white;
        }

        div.activate {
          background-color: ${tokens.grayBlue};

          svg {
            fill: white;
          }
        }
      }

      &.active {
        div.author {
          display: none;

          @media(min-width: 768px) {
            display: grid;
          }
        }

        div.share {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          grid-row: 1/3;
          grid-column: 1/2;
          height: 100%;
          background-color: ${tokens.darkGrayBlue};
          width: min-content;

          span {
            text-transform: uppercase;
            letter-spacing: 0.25rem;
            color: ${tokens.grayBlue};
            margin-right: 1rem;
          }

          a {
            margin-right: 1rem;

            &:last-of-type {
              margin-right: 0;
            }

            img {
              height: 1.25rem;
              width: 1.25rem;
            }
          }

          @media(min-width: 768px) {
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(60px, -4rem);
            height: max-content;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            text-align: center;
            box-shadow: 0 1rem 2rem #c5cfdb;

            &:after{
              content: '';
              position: absolute;
              border-style: solid;
              border-width: 15px 15px 0;
              border-color: ${tokens.darkGrayBlue} transparent;
              display: block;
              width: 0;
              z-index: 1;
              bottom: -15px;
              left: 110px;
          }
          }
        }
      }
    }
  }
`;

const onClick = () => {
  var thisItem = document.getElementById('footer');
  thisItem.classList.toggle("active");
};

const Article = () => {
  return (
    <StyledArticle id="article" solution="https://www.frontendmentor.io/solutions/article-preview-solution-using-sass-UjokfRb8i">
      <article>
        <header>
          <img src={Drawers} alt="drawers" />
        </header>

        <section>
          <div className="text">
            <h1>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>

            <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
          </div>

          <footer id="footer">
            <div className="author">
              <img className="avatar" src={Avatar} alt="Michelle" />
              <p className="name">Michelle Appleton</p>
              <p className="date">28 Jun 2020</p>
            </div>

            <div className="share">
                <span>Share</span>
                <a href="https://www.facebook.com">
                  <img src={Facebook} alt="Facebook" />
                </a>
                <a href="https://www.twitter.com">
                  <img src={Twitter} alt="Twitter" />
                </a>
                <a href="https://www.pinterest.com">
                  <img src={Pinterest} alt="Pinterest" />
                </a>
            </div>

            <div className="activate" onClick={() => onClick()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                <path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/>
              </svg>
            </div>
          </footer>
        </section>
      </article>
    </StyledArticle>
  );
}

export default Article;

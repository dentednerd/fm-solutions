import styled from 'styled-components';
import Avatar from '../images/image-victor.jpg';
import Bg from '../images/bg-pattern-card.svg';

const StyledCard = styled.section`
  label: Card;
  position: relative;
  background-color: white;
  border-radius: 1rem;
  display: grid;
  grid-template-rows: 8.75rem 9rem 5.625rem;
  overflow: hidden;
  box-shadow: 0 0 2rem hsla(229, 23%, 23%, 0.25);
  width: calc(100vw - 2rem);
  max-width: 19.5rem;

  .bold {
    color: hsl(229, 23%, 23%);
    font-weight: 700;
    line-height: normal;
    font-size: 18px;
  }

  header {
    background-image: url(${Bg});
    background-size: cover;
  }

  main {
    width: 100%;
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;

    img {
      width: 6rem;
      margin: -5rem auto 1rem;
      border-radius: 50%;
      border: solid 4px white;
    }

    h2 {
      font-size: 1rem;
      margin-bottom: 1rem;

      span {
        color: gray;
        font-weight: 400;
        margin-left: 0.75rem;
      }
    }
  }

  footer {
    border-top: solid 1px #eaeaea;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;

    div {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;

      span.bold {
        margin-bottom: 0.5rem;
      }

      span.text {
        display: block;
        letter-spacing: 0.1rem;
        font-size: 0.625rem;
      }
    }
  }
`;

const Card = () => {
  return (
    <StyledCard>
      <header></header>
      <main>
        <img src={Avatar} alt="Victor Crest" />
        <h2 className="bold">
          Victor Crest
          <span>
            26
          </span>
        </h2>
        <span>
        London
        </span>
      </main>
      <footer>
        <div>
          <span className="bold">80K</span>
          <span className="text">Followers</span>
        </div>

        <div>
          <span className="bold">803K</span>
          <span className="text">Likes</span>
        </div>

        <div>
          <span className="bold">1.4K</span>
          <span className="text">Photos</span>
        </div>
      </footer>



    </StyledCard>
  );
}

export default Card;

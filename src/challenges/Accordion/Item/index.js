import styled from 'styled-components';
import { iconArrow } from '../images';
import { tokens } from '../tokens';

const StyledItem = styled('div')`
border-bottom: solid 1px ${tokens.dividerBlue};

  button {
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: none;
    background: transparent;
    padding: 1.25rem 0 1rem;
    font-family: 'Kumbh Sans', sans-serif;
    text-align: left;
    color: ${tokens.textNeutralVdark};
    transition: color 0.2s ease-in-out;

    &:focus {
      border: none;
      outline: none;
    }

    &:hover {
      color: ${tokens.textPrimaryRed};
      transition: color 0.2s ease-in-out;
    }

    &::after {
      content: '';
      display: block;
      height: 0.625rem;
      width: 0.625rem;
      background-image: url(${iconArrow});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      transform: scaleY(1);
      transition: transform 0.2s ease-in-out;
    }
  }

  div.answer {
    height: 0;
    transform: scaleY(0);
    transform-origin: center top;
    line-height: 1.5rem;
    padding: 0;
    color: ${tokens.textNeutralDark};
    width: 85%;

    @media(min-width: 768px) {
      width: 100%;
    }
  }

  &.open {
    button {
      font-weight: 700;
      color: ${tokens.textNeutralVdark};

      &::after {
        transform: scaleY(-1);
        transition: transform 0.2s ease-in-out;
      }
    }

    .answer {
      height: auto;
      transform: scaleY(1);
      transform-origin: center top;
      padding: 0 0 1rem;
      transition: transform 0.2s ease-in-out;
    }
  }
`;

const onClick = (event) => {
  var thisItem = event.target.parentNode;
  thisItem.classList.toggle("open");
}

const Item = ({ question, answer }) => {
  return (
    <StyledItem>
      <button onClick={(event) => onClick(event)}>
        {question}
      </button>

      <div className="answer">
        {answer}
      </div>
    </StyledItem>
  );
}

export default Item;

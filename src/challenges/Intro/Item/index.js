import styled from 'styled-components';

const StyledItem = styled.a`
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.25rem #b14e95;
  transform: scale(1);
  transition: transform 0.2s ease-in-out;

  img {
    object-fit: cover;
  }

  img.mobile {
    display: block;
    width: 100%;
    margin: 0 auto;
    aspect-ratio: 1/2;

    @media(min-width: 768px) {
      display: none;
    }
  }

  img.desktop {
    display: none;

    @media(min-width: 768px) {
      display: block;
      width: calc((100vw - 4rem) / 3);
      aspect-ratio: 2/1;
    }
  }

  .title {
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    background-image: linear-gradient(to bottom, transparent, #8c4079 100%);
    text-align: center;
    font-size: 0.75rem;

    span {
      background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);
      color: #69305b;
      font-family: 'Ubuntu', sans-serif;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 0.1rem;
      border: solid 2px #69305b;
      padding: 0.5rem;
    }
  }

  &:hover {
    transform: scale(1.05);
    z-index: 999;
    transition: all 0.3s ease-in-out;

    .title {
      transform: translateY(0);
    }
  }
`;

const Item = ({ href, mobileSrc, desktopSrc, alt }) => {
  return (
    <StyledItem href={href}>
      <img className="mobile" src={mobileSrc} alt={alt} />
      <img className="desktop" src={desktopSrc} alt={alt} />
      <div className="title">
        <span>{alt}</span>
      </div>
    </StyledItem>
  );
}

export default Item;

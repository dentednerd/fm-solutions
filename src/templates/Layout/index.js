import styled from 'styled-components';

const StyledLayout = styled.div`
  position: relative;
  min-height: 100vh;
  height: auto;
  max-height: fit-content;
  width: 100vw;
  max-width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media(min-height: 720px) {
    min-height: 100vh;
  }

  a.back-to-top,
  a.solution {
    background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);
    color: #333;
    font-family: 'Ubuntu', sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.1rem;
    border: solid 2px #333;
    padding: 0.5rem;
    font-size: 0.75rem;
  }

  a.back-to-top {
    position: absolute;
    bottom: 1rem;
    left: 2rem;
  }

  a.solution {
    position: absolute;
    bottom: 1rem;
    right: 2rem;
  }
`;

const Layout = ({
  children,
  className,
  id,
  noBackToTop,
  solution
}) => {
  return (
    <StyledLayout className={className} id={id}>
      {children}
      {!noBackToTop && <a className="back-to-top" href="#intro">Back To Top</a>}
      {solution && <a className="solution" href={solution}>Solution</a>}
    </StyledLayout>
  );
}

export default Layout;

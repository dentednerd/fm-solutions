import styled from 'styled-components';
import Layout from '../../templates/Layout';
import Card from './Card';
import Top from './images/bg-pattern-top.svg';
import Bottom from './images/bg-pattern-bottom.svg';
import { tokens } from './tokens';

const StyledProfile = styled(Layout)`
  background-color: ${tokens.darkCyan};
  color: ${tokens.darkGray};
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 16px;

  .top {
    width: 50rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-100%, -100%);
  }

  .bottom {
    width: 50rem;
    position: absolute;
    bottom: 50%;
    right: 50%;
    transform: translate(100%, 100%);
  }

  div.attribution {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-size: 0.75rem;
    padding: 1rem 0;
    color: hsl(229, 23%, 23%);

    a {
      text-decoration: none;
      color: white;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: hsl(229, 23%, 23%);
        transition: color 0.2s ease-in-out;
      }
    }
  }
`;

function Profile() {
  return (
    <StyledProfile id="profile" solution="https://www.frontendmentor.io/solutions/profile-card-using-react-and-styled-components-fM_3N6oxe">
      <img className="top" src={Top} alt="bg top" />
      <img className="bottom" src={Bottom} alt="bg bottom" />
      <Card />
    </StyledProfile>
  );
}

export default Profile;

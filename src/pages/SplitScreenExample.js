import logo from '../logo.svg';
import { SplitScreen } from '../components/SplitScreen';
import Button, { FancyButton, SubmitButton, AnimatedLogo, DarkButton } from '../components/Button';

const LeftHandComponent = ({ name }) => {
  return (
    <h1>{name}</h1>
  )
};

const RightHandComponent = () => (
  <div>
    <h1>Right hand</h1>
    <AnimatedLogo src={logo} />
    <p></p>
    <Button>Styled Button</Button>
    <p></p>
    <Button variant='outline'>Styled Button</Button>
    <p></p>
    <FancyButton as='a'>Fancy Button</FancyButton>
    <p></p>
    <SubmitButton>Submit Button</SubmitButton>
    <p></p>
    <DarkButton>Dark Button</DarkButton>
  </div>
);

export const SplitScreenExample = () => {
  return (
    <SplitScreen
      leftWeight={1}
      rightWeight={3}
    >
      <LeftHandComponent name="Shaun" />
      <RightHandComponent />
    </SplitScreen>
  )
};

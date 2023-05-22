import { ButtonList, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ButtonList>
      <li>
        <Button name="good" type="button" onClick={onLeaveFeedback}>
          Good
        </Button>
      </li>
      <li>
        <Button name="neutral" type="button" onClick={onLeaveFeedback}>
          Neutral
        </Button>
      </li>
      <li>
        <Button name="bad" type="button" onClick={onLeaveFeedback}>
          Bad
        </Button>
      </li>
    </ButtonList>
  );
};

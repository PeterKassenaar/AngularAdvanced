// 03-CardComponentFunction.stories.ts
import {CardComponent} from '../app/card/card.component';
import {action} from '@storybook/addon-actions';

export default {
  title: 'Card Component Functions',
  component: CardComponent,
};

// 2. Syntax using the plain JS function/const notation
export const CardFunctionStory = () => ({
  component: CardComponent,
  props: {
    title: 'Card Story as a Function',
    subtitle: 'This story is defined as a plain JavaScript function'
  }
});

CardFunctionStory.story = {
  parameters: {notes: 'Notes on a card, defined in a plain JavaScript Object'},
};

export const CardFunctionAction = () => ({
  component: CardComponent,
  props: {
    title: 'Card with an action',
    subtitle: 'Click the button below',
    btnClicked: action('The button was clicked')
  }
});

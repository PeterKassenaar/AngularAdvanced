// 02-CardComponent.stories.ts
import {storiesOf} from '@storybook/angular';
import {withNotes} from '@storybook/addon-notes';
import {action} from '@storybook/addon-actions';

import {CardComponent} from '../app/card/card.component';

// 1. Syntax using the storiesOf() function
storiesOf('Card Component', module)
  .add('Empty card', () => ({
    component: CardComponent,
    props: {}
  }))
  .add('Card with title', () => ({
    component: CardComponent,
    props: {
      title: 'Jaime Lannister'
    }
  }))
  .add('Card with title and content', () => ({
    component: CardComponent,
    props: {
      title: 'Jaime Lannister',
      subtitle: '"There are no men like me. Only me."',
      content: 'Ser Jaime Lannister, commonly known as the "Kingslayer", was the elder son of Lord Tywin Lannister, younger twin brother of Cersei Lannister, and older brother of Tyrion Lannister.'
    }
  }))
  .add('Card with notes',
    withNotes('This card has inputs for title, subtitle and content and outputs an event')
    (() => ({
      component: CardComponent,
      props: {
        title: 'Card with notes'
      }
    }))
  )
  .add('Card with Action', () => ({
    component: CardComponent,
    props: {
      title: 'Card with an action',
      subtitle: 'Click the button below',
      btnClicked: action('The button was clicked')
    }
  }));


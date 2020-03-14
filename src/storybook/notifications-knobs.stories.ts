import { storiesOf } from '@storybook/angular';
import { NotificationsComponent } from '../app/UI-kit/notifications/notifications.component';
import { withKnobs, text, select } from '@storybook/addon-knobs';

storiesOf('With Knobs', module)
  .addDecorator(withKnobs)
  .add('Notifications', () => {
    const types = ['error', 'info', 'warning', 'success'];
    const type = select('type', types, 'info');
    const message = text('message', 'Default message');
    const title = text('title', 'Default title');
    
    const notification = { type, message, title };

    return {
      moduleMetadata: {
        entryComponents: [NotificationsComponent],
        declarations: [NotificationsComponent]
      },
      template: `<app-notifications [notification]="notification"></app-notifications>`,
      props: { notification }
    };
  });
import { moduleMetadata } from '@storybook/angular';
import { NotificationsComponent } from '../app/UI-kit/notifications/notifications.component';
import { errorNotification, successNotification } from '../app/UI-kit/notifications/notification.types';

export default {
  title: 'Components/Notifications',
  decorators: [
    moduleMetadata({
      declarations: [NotificationsComponent],
    }),
  ],
};
export const Default = () => ({
  template: 
    `<div>
        <app-notifications [notification]="errorNotification"></app-notifications>
        <app-notifications [notification]="successNotification"></app-notifications>
        <app-notifications [notification]="warningNotification"></app-notifications>
        <app-notifications [notification]="infoNotification"></app-notifications>
     </div>`,
  props: {
    errorNotification: { type: 'error', message: 'Something went wrong' },
    successNotification: { type: 'success', message: 'Congratulations!' },
    warningNotification: { type: 'warning', message: 'This is a warning' },
    infoNotification: { type: 'info', message: 'Some information goes here' },
  }
});
Default.story = {
  name: 'Default',
};
export const WithTitle = () => ({
  template: 
    `<div>
        <app-notifications [notification]="errorNotification"></app-notifications>
        <app-notifications [notification]="successNotification"></app-notifications>
        <app-notifications [notification]="warningNotification"></app-notifications>
        <app-notifications [notification]="infoNotification"></app-notifications>
     </div>`,
  props: {
    errorNotification: { type: 'error', message: 'Something went wrong', title: 'We are sorry' },
    successNotification: { type: 'success', message: 'You have an account', title: 'Congratulations!' },
    warningNotification: { type: 'warning', message: 'This is a warning', title: 'Important:' },
    infoNotification: { type: 'info', message: 'Some information goes here', title: 'Please read' },
  }
});
WithTitle.story = {
  name: 'With Title',
};
export const GenericError = () => ({
  template: `<app-notifications [notification]="errorNotification"></app-notifications>`,
  props: {
    errorNotification: errorNotification,
  }
});
GenericError.story = {
  name: 'Generic Error',
};
export const GenericSuccess = () => ({
  template: `<app-notifications [notification]="successNotification"></app-notifications>`,
  props: {
    successNotification: successNotification,
  }
});
GenericSuccess.story = {
  name: 'Generic Success',
};
export const CustomError = () => ({
  template: `<app-notifications [notification]="customError"></app-notifications>`,
  props: {
    customError: { type: 'error', message: 'Something went wrong', title: 'We are sorry'},
  }
});
CustomError.story = {
  name: 'Custom Error',
};
export const CustomSuccess = () => ({
  template: `<app-notifications [notification]="customSuccess"></app-notifications>`,
  props: {
    customSuccess: { type: 'success', message: 'Everything is fine', title: 'Congratulations!'},
  }
});
CustomSuccess.story = {
  name: 'Custom Success',
};
export const CustomWarning = () => ({
  template: `<app-notifications [notification]="customWarning"></app-notifications>`,
  props: {
    customWarning: { type: 'warning', message: 'This is a warning', title: 'Attention'},
  }
});
CustomWarning.story = {
  name: 'Custom Warning',
};
export const CustomInfo = () => ({
  template: `<app-notifications [notification]="customInfo"></app-notifications>`,
  props: {
    customInfo: { type: 'info', message: 'Some information goes here', title: 'Please read'},
  }
});
CustomInfo.story = {
  name: 'Custom Info',
};
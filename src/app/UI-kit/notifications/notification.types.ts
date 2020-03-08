export interface Notification {
    type: 'error' | 'success' | 'info' | 'warning',
    title?: string,
    message: string,
}
export const errorNotification = { type: 'error', message: 'Something went wrong'};
export const successNotification = { type: 'success', message: 'Success!'};
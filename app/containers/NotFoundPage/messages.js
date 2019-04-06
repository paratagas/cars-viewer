/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.NotFoundPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: '404 - Not Found',
  },
  doesNotExist: {
    id: `${scope}.doesNotExist`,
    defaultMessage: 'Sorry, the page you are looking for does not exist.',
  },
  backHome: {
    id: `${scope}.backHome`,
    defaultMessage: 'You can always go back to the ',
  },
  homePage: {
    id: `${scope}.homePage`,
    defaultMessage: 'homePage',
  },
});

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import DetailsPage from '../index';
import messages from '../messages';

describe('<DetailsPage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<DetailsPage />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toEqual(true);
  });
});

import React from 'react';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import messages from 'translations';
import { langSelectors } from 'store/ducks/LanguageDuck';

const IntlWrapper = props => {
  const lang = useSelector(langSelectors.getLanguage);
  return (
    <IntlProvider locale={lang} messages={messages[lang]} key={lang}>
      {props.children}
    </IntlProvider>
  );
};

export default IntlWrapper;

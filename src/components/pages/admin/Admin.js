import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterSelectors, counterActions } from 'store/ducks/CounterDuck';
import { actionUtils } from 'store/helpers/actionUtils';
import { useTranslation } from 'components/hooks/useTranslation';
import Page from 'components/common/page/Page';

const Admin = () => {
  const number = useSelector(counterSelectors.getNumber);
  const dispatch = useDispatch();
  const t = useTranslation();
  return (
    <Page title="Admin">
      <p>{number}</p>
      <p>{t('HELLO')}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(
            actionUtils.registerCallback(
              actionUtils.registerLoading(counterActions.increase(2)),
            ),
          );
        }}
      >
        +
      </button>
      <button type="button" onClick={null}>
        -
      </button>
    </Page>
  );
};

export default Admin;

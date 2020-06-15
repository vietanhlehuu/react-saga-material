import { useIntl } from 'react-intl';
import { useCallback } from 'react';

export const useTranslation = () => {
  const intl = useIntl();
  const t = useCallback(
    (id, option) => {
      return intl.formatMessage(
        {
          id,
        },
        {
          ...(option ?? {}),
        },
      );
    },
    [intl],
  );
  return t;
};

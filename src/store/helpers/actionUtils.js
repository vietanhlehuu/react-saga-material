export const actionUtils = {
  doNothing: () => ({
    type: "DO_NOTHING",
  }),
  callback: (meta, callback) => {
    return {
      type: "CALLBACK",
      payload: {
        meta,
        callback,
      },
    };
  },
  registerCallback: (action, callback) => {
    const hasMeta = !!action.meta;
    let meta = {
      callback,
    };
    if (hasMeta) {
      meta = {
        ...action.meta,
        ...meta,
      };
    }
    return {
      ...action,
      meta,
    };
  },
  registerLoading: (action) => {
    const hasMeta = !!action.meta;
    let meta = {
      isLoading: true,
    };
    if (hasMeta) {
      meta = {
        ...action.meta,
        ...meta,
      };
    }
    return {
      ...action,
      meta,
    };
  },
};

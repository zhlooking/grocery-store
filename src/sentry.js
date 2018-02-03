import Raven from 'raven-js';

const configSentry = () => {
  if (!SENTRYDSN) {
    return;
  }
  Raven.config(SENTRYDSN, {
    release: VERSION,
    ignoreUrls: [
      // 不报错链接url，可用于第三方类库的错误屏蔽
    ],
  }).install();

  Raven.setUserContext({
    username: 'zhh',
  });
};

export default configSentry;

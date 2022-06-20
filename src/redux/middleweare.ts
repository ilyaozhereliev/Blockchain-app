import { compose, Middleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createLogger } from 'redux-logger';

export const logger = createLogger({
  duration: true,
  collapsed: true,
});

const isDevelopment = process.env.NODE_ENV === 'development';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = isDevelopment && devtools ? devtools : compose;

const middleware: any = [];

if (isDevelopment) {
  middleware.push(logger);
}

export { composeEnhancers, middleware };

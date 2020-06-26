/**
 * See: https://docs.amplify.aws/start/getting-started/setup/q/integration/angular#angular-6-support
 */

(window as any).global = window;
(window as any).process = {
    env: { DEBUG: undefined },
};

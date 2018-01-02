// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD7yxCPlY3_q3MdPUPxfCETet5QYcVuVSI",
    authDomain: "central-pacific-motors.firebaseapp.com",
    databaseURL: "https://central-pacific-motors.firebaseio.com",
    projectId: "central-pacific-motors",
    storageBucket: "central-pacific-motors.appspot.com",
    messagingSenderId: "958574821956"
  }
};

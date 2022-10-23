// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiKey: '91ebd4279b9b42b08c38d4d9b6f6ba58',
  newsEndpoint: 'https://newsapi.org/v2/everything',
  testEndpoint:
    'https://newsapi.org/v2/everything?q=climate&from=2022-09-30&sortBy=popularityt&apiKey=91ebd4279b9b42b08c38d4d9b6f6ba58',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

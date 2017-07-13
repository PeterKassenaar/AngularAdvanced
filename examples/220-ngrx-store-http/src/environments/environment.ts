// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	// url of production API, hosted by json-server. See https://www.npmjs.com/package/json-server for detail
	// At the moment it is the same as the development API. However, changes to this
	// endpoint require no further modifications to the application code so you can
	// swap Dev and Prod endpoints pretty easy.
	apiUrl    : 'http://localhost:3000/cities'
};

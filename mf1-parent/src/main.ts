// import {loadRemoteEntry} from "@angular-architects/module-federation";
//
// Promise.all([
//   loadRemoteEntry('http://localhost:8081/remoteEntry.js', 'mf2Child')
// ])
//   .catch(err => console.error('Error loading remote entries', err))
//   .then(() => {
//     console.log('lets load bootstrap');
//     import('./bootstrap')
//   })
//   .catch(err => console.error(err));

import('./bootstrap')
	.catch(err => console.error(err));

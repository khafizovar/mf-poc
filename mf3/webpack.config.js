const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "mf3",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({

        // For remotes (please adjust)
        name: "mf3",
        filename: "remoteEntry.js",
        exposes: {
            './m2': './/src/app/modulea/modulea-routing.module.ts',
            './lazyGtmModule': './/src/app/gtm-part-module/gtm-part-module-routing.module.ts',
        },
        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "primeng": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "primeicons": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          // "rxjs": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
          ...sharedMappings.getDescriptors()
        })
    }),
    sharedMappings.getPlugin()
  ],
};

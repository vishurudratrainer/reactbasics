 module.exports = {
              testEnvironment: 'jsdom',

          // ...other configurations
          moduleNameMapper: {
            "^react-router-dom$": "C:/reactbasics/reactbasics/reactapp/node_modules/react-router-dom",
            // For older versions or specific sub-modules, you might need:
            // "^react-router-dom/(.*)$": "<rootDir>/node_modules/react-router-dom/$1",
          },
        };
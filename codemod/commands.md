jscodeshift -t ./angular-template-transform.js ../angular-js/



node angular-transform-html.js
yarn test --testPathPattern=__tests__/transform-html.test.js
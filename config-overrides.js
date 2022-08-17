const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@": "src",
    "@app": "src/app",
    "@pages": "src/pages",
    "@features": "src/features",
    "@entities": "src/entities",
    "@shared": "src/shared",
    "@widgets": "src/widgets",
    
  })(config);

  return config;
};

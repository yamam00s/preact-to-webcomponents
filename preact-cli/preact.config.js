export default (config, env, _helpers) => {
  config.entry = {
    'x-greeting': '/components/Greeting.tsx'
  };
  config.output.filename = '[name].js';
};

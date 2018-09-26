const setHeaders = (token) => ({
  Authorization: `Bearer ${token}`
});

const isTestEnv = () => process.env.NODE_ENV === 'test';

const isProdEnv = () => process.env.NODE_ENV === 'production';

const isError = ({ data }) => !data.success;

module.exports = {
  setHeaders,
  isTestEnv,
  isProdEnv,
  isError
};

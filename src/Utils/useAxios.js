import axios from "axios";

const FetchClient = () => {
  const defaultOptions = {
    baseURL: 'https://test-amazon-php.ygrehu.easypanel.host',
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  return instance;
};

export default FetchClient();

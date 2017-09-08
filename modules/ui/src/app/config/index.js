/**
 * Class to centralize environment configuration logic
 */
class Config {
  /**
   * Returns current value of NODE_ENV ('development' if not specified)
   * @static
   */
  static get nodeEnv() {
    return process.env.NODE_ENV || 'development';
  }

  /**
   * Returns current value of HOST ('localhost' if not specified)
   * @static
   */
  static get host() {
    return process.env.HOST || 'localhost';
  }

  /**
   * Returns current value of PORT (8080 if not specified)
   * @static
   */
  static get port() {
    return +process.env.PORT || 8080;
  }

  /**
   * Returns current value of BASENAME ('/' if not specified)
   * @static
   */
  static get basename() {
    return process.env.BASENAME || '/';
  }

  /**
   * Returns current value of API_URL ('http://localhost:8084' if not specified)
   * @static
   */
  static get apiUrl() {
    return process.env.API_URL || 'http://localhost:8084';
  }

  /**
   * Returns current value of JWT_STORAGE_KEY ('access_token' if not specified)
   * @static
   */
  static get jwtStorageKey() {
    return process.env.JWT_STORAGE_KEY || 'access_token';
  }
}

export default Config;

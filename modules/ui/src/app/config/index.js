/**
 * Class to centralize environment configuration logic
 */
class Config {
  /**
   * Returns current value of NODE_ENV ('development' if not specified)
   * @static
   * @returns {string} NODE_ENV
   */
  static get nodeEnv() {
    return process.env.NODE_ENV || 'development';
  }

  /**
   * Returns current value of HOST ('localhost' if not specified)
   * @static
   * @returns {string} HOST
   */
  static get host() {
    return process.env.HOST || 'localhost';
  }

  /**
   * Returns current value of PORT (8080 if not specified)
   * @static
   * @returns {number} PORT
   */
  static get port() {
    return +process.env.PORT || 8080;
  }

  /**
   * Returns current value of BASENAME ('/' if not specified)
   * @static
   * @returns {string} BASENAME
   */
  static get basename() {
    return process.env.BASENAME || '/';
  }
}

export default Config;

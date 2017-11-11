/**
 * @param {object} credentials
 * @returns {object}
 */
export const configureAuth = (data) => {
  const auth = { user: data.user, password: data.password }
  return auth
}

/**
 * @param {object} data ()
 * @returns {object}
 */
export const configureAuthData = { user: '', password: '' }

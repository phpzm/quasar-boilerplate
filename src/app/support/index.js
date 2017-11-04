/**
 * Environment variables
 */
const env = process.env

export const strict = env.NODE_ENV !== 'production'

export const APP_NAME = env.APP.NAME

export const APP_USER = env.APP.USER

export const APP_TOKEN = env.APP.TOKEN

export const APP_REMEMBER = env.APP.REMEMBER

export const APP_DEV = env.DEV

/**
 * Basic routes
 */
const routes = env.ROUTES

export const PATH_LOGIN = routes.LOGIN

export const PATH_NO_ACCESS = routes.NO_ACCESS

export const PATH_HOME = routes.HOME

/**
 * API settings
 */
const api = env.API

export const URL_API = api.PROTOCOL + '://' + api.DOMAIN + (api.PORT ? ':' + api.PORT : '') + api.PATH

export const URL_IMAGE_MANAGER = URL_API + '/image/manager'

export const URL_IMAGE_UPLOAD = URL_API + '/image/upload'

export const URL_FILE_UPLOAD = URL_API + '/file/upload'

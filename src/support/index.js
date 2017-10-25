// noinspection JSUnresolvedVariable
const env = process.env

export const PATH_LOGIN = {name: 'auth.login'}

// noinspection JSUnresolvedVariable
export const strict = env.NODE_ENV !== 'production'

// noinspection JSUnresolvedVariable
export const APP_NAME = env.APP.NAME

// noinspection JSUnresolvedVariable
export const APP_USER = env.APP.USER

// noinspection JSUnresolvedVariable
export const APP_TOKEN = env.APP.TOKEN

// noinspection JSUnresolvedVariable
const api = env.API

// noinspection JSUnresolvedVariable
export const URL_API = api.PROTOCOL + '://' + api.DOMAIN + (api.PORT ? ':' + api.PORT : '') + api.PATH

export const URL_IMAGE_MANAGER = URL_API + '/image/manager'

export const URL_IMAGE_UPLOAD = URL_API + '/image/upload'

export const URL_FILE_UPLOAD = URL_API + '/file/upload'

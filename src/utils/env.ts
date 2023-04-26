const mode = process.env.APP_MODE

export const ENV_DEV = mode === 'dev'
export const ENV_PROD = mode === 'prod'

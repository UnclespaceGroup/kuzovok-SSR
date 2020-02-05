export const URL_SERVICE = '/service/'
export const URL_WORK = '/work/'
export const URL_REPORT = '/report/'
export const URL_PAGE = '/page/'
export const URL_MAIN_PAGE_ADVANTAGES = '/advantages-main/'
export const URL_MAIN_PAGE_CARDS = '/main-page-cards/'
export const URL_SLIDES = '/slide/'
export const URL_CONTACTS = '/contact/'
export const URL_DATA = '/data/'
export const URL_PAPER = '/paper/'

export const localApi = 'http://localhost:3002/'
export const productionApi = 'https://server.mdf-center.ru/'

export const SERVER_URL = process.env.NODE_ENV === 'production' ? productionApi : localApi

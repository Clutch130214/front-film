import * as APIConfig from './APIConfig'

export default {
    serie: {
        getAll: () => `${ APIConfig.API_CINE }/series`,
        getById: id => `${ APIConfig.API_CINE }/serie/${ id }`
    },

    film: {
        getAll: () => `${ APIConfig.API_CINE }/films`,
        getById: id => `${ APIConfig.API_CINE }/film/${ id }`
    },

    acteur: {
        getAll: () => `${ APIConfig.API_CINE }/acteurs`,
    }

}

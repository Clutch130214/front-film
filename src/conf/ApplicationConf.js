import * as APIConfig from './APIConfig'

export default {
    serie: {
        getAll: () => `${APIConfig.API_CINE}/series`,
    },

    film: {
        getAll: () => `${APIConfig.API_CINE}/films`,
    },

    acteur: {
        getAll: () => `${APIConfig.API_CINE}/acteurs`,
    }

}

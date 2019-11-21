import * as APIConfig from './APIConfig'

export default {
    serie: {
        getAll: () => `${APIConfig.API_URI}/series`,
    },

    film: {
        getAll: () => `${APIConfig.API_URI}/films`,
    }

}

import * as APIConfig from './APIConfig'

export default {
    series: {
        getAll: () => `${APIConfig.API_URI}/series`,
    }

}

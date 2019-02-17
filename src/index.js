
import Transport from '~/Utilities/Transport'
import DataService from '~/DataService'

// transport layer configuration
Transport.init('https://localhost:44377/')

class Core {
    // configurations = {
    //     key: ''
    // };

    constructor() {
        this.configurations = {
            key: ''
        };
    };

    init(config) {
        this.configurations = Object.assign(this.configurations, config);
    }

    dataService() {
        return new DataService()
    }
}
export default new Core();
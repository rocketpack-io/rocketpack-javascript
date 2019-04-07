
import Transport from '~/Utilities/Transport'
import DataService from '~/DataService'

class Core {
    constructor() {
        this.configurations = {
            apiBasePath: 'https://api.rocketpack.io/',
            key: ''
        };
    };

    init(config) {
        this.configurations = Object.assign(this.configurations, config);

        // transport layer configuration
        Transport.init(this.configurations.apiBasePath);

        // use this content-type because of preventing preflight requests
        //Transport.addDefaultHeader('Content-Type', 'text/plain');
    }

    dataService() {
        return new DataService()
    }

    fetchSampleData() {
        return Transport.post('api/data/values')
    }

    sayHello() {
        var p = { name: 'mostafa', family: 'rowghanian' }
        return Transport.post('api/data/sayHello', p);
    }
}
export default new Core();
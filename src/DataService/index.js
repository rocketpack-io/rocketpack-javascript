import Collection from './collection'

export default class DataService {

    collection(name) {
        return new Collection(name);
    }
    
}
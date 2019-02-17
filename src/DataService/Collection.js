import Transport from '~/Utilities/Transport'

export default class Collection {
    //collectionName = '';

    constructor(name) {
        this.collectionName = name;
        console.log('collection created: ' + this.collectionName)
    }

    find() {
        return new Promise((resolve, reject) => {
            Transport.post('ds/find', {
                'collection': this.collectionName,
                'criteria': ''
            }).then(result => {
                if (result.data.success) {
                    var data = result.data.data;
                    if (result.data.data && result.data.data.length > 0)
                        data = result.data.data.map(x => JSON.parse(x));
                    resolve(data);
                } else {
                    reject(result.message);
                }
            }).catch(result => {
                reject(result)
            })
        })
    }

    findOne(id) {
        return new Promise((resolve, reject) => {
            Transport.post('ds/findOne', {
                'collection': this.collectionName,
                'id': id
            }).then(result => {
                if (result.data.success) {
                    var data = JSON.parse(result.data.data)
                    resolve(data);
                } else {
                    reject(result.message);
                }
            }).catch(result => {
                reject(result)
            })
        })
    }

    add(model) {
        return new Promise((resolve, reject) => {
            Transport.post('ds/add', {
                'collection': this.collectionName,
                'model': JSON.stringify(model)
            }).then(result => {
                if (result.data.success) {
                    resolve(result.data.data);
                } else {
                    reject(result.message);
                }
            }).catch(result => {
                reject(result)
            })
        })
    }

    update(model) {
        return new Promise((resolve, reject) => {
            Transport.post('ds/update', {
                'collection': this.collectionName,
                'id': model._id,
                'model': model
            }).then(result => {
                if (result.data.success) {
                    resolve(result.data.data);
                } else {
                    reject(result.message);
                }
            }).catch(result => {
                reject(result)
            })
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            Transport.post('ds/delete', {
                'collection': this.collectionName,
                'id': id
            }).then(result => {
                if (result.data.success) {
                    resolve(result.data.data);
                } else {
                    reject(result.message);
                }
            }).catch(result => {
                reject(result)
            })
        })
    }
}
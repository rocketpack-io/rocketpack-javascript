# rocketpack-sdk-js
Javascript SDK for Rocket Pack Services

## Quick Start

### Installation

```shell
$ npm install rocketpack --save
```

### Initialization

```javascript
import rocketpack from 'rocketpack'
rocketpack.init({ key: 'YOUR-PROJECT-KEY' })
```

### Data Services

```javascript
const peopleCollection = rocketpack.dataService().collection('people')
let peopleItems = peopleCollection.find()
```

### Authentication Services

```javascript
const auth = rocketpack.authService()
 
// register a user
function registerUser(username, password, metadata) {
  auth.register({
    username: username,
    password: password,
    claims: Object.keys(obj).map((key) => ({name: key, value: obj[key]})
  })
}
```

## Thanks
Thanks a lot to [@cpojer](https://github.com/cpojer) for his kindness for transfering the ownership of the `rocketpack` npm package.
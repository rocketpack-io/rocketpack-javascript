# rocketpack-javascript
Javascript Client for Rocket Pack Cloud Services

### Installation

```shell
$ npm install rocketpack.io --save
```

### Initialization

```javascript
import rocketpack from 'rocketpack.io'
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
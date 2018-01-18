# React Native ToDo

A todo list application for iOS or Android built in React Native.


## Setup

The usual clone, then `npm install` business.

### Firebase config

This is setup to wireup to a firebase service by default. But I don't feel like sharing my firebase's creds with the world.

To setup for your purposes, create a `/src/components/firebaseConfig.js` file and fill in the following with your firebase's config data:

```
const firebaseConfig = {
    apiKey:
    authDomain:
    databaseURL:
    projectId:
    storageBucket:
    messagingSenderId:
}

export default firebaseConfig
```

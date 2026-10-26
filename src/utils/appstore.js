



import { configureStore } from '@reduxjs/toolkit'
import userslice from './userslice.js'
const appstore=configureStore ({

    reducer: {
        user: userslice
    }

});
export default appstore
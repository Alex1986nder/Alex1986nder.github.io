import {applyMiddleware} from 'redux';

import authMiddleware from './authMiddleware';
import regMiddleware from './regMiddleware';




export default applyMiddleware(authMiddleware, regMiddleware)
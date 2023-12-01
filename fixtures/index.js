import express from 'express'
import fromPairs from 'lodash/fromPairs'
import dotenv from 'dotenv'

import styles from './index.module.css'
import config from './config.js'
import map from 'lodash/map'
import configs from './config.js'
import './styles.scss'
import './set-production-env.js'
import {conf} from './config.js'
import defaultsDeep from 'lodash/defaultsDeep'
import fs from 'fs'

const comment = 'This is a comment' //eslint-disable-line

/**
 * @typedef {SomeType} SomeTypedef
 * @property foo
 */

                   function foo (){return 'foo'}

function callback(err, data) {
  throw new Error('My error')
}

Promise.resolve()
  .then(() => callback(null, 'data'))
  .catch(err => callback(err.message, null))

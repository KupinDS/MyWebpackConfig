import * as $ from 'jquery'
import Post from '@modules/Post'
import json from './assets/json.json'
import xml from './assets/data.xml'
import csv from './assets/test.csv'
import WebapckLogo from './assets/webpack-icon.png'
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'
import './babel'

const post = new Post('webpack', WebapckLogo)

$('pre').addClass('code').html(post.toString())

console.log('Post to string', post.toString());
console.log('This is JSON: ', json);
console.log('xml: ', xml);
console.log('csv: ', csv); 
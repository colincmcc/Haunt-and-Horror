import { GQC } from 'graphql-compose';
import fetch from 'node-fetch';
import mailgun from 'mailgun.js';
import { pubsub } from './subscriptions';

import { ContactFormTC } from './types/ContactForm';
import { PageTC } from './types/Wordpress/Page';
import { getPostResolvers } from './types/Wordpress/Post'

import { dev, prod } from './config';

require('dotenv').config();

// ! Wordpress schema expects relative URL's to be returned

// BaseUrl is also used in ./utils
const baseUrl = dev.wpEndpoint;

//const mailgunUrl = process.env.MAILGUN_URL;
//const mailgunKey = process.env.MAILGUN_KEY;

// * SQUARE
// Queries

// Mutations

// Subscriptions

// * WORDPRESS
const postResolvers = getPostResolvers();


/*
const mgClient = mailgun.client({
  username: 'api',
  key: mailgunKey || ''
});
*/

GQC.rootQuery().addFields({
...postResolvers,
  pageBy: {
    type: [PageTC],
    args: {
      id: 'Int',
      slug: 'String'
    },
    resolve: (_, args) => {
      if (args.id != null) {
        return fetch(`${baseUrl}/pages/${args.id}`).then(r => [r.json()]);
      }
      return fetch(`${baseUrl}/pages?slug=${args.slug}`).then(r => r.json());
    }
  },
  allPages: {
    type: [PageTC],
    resolve: () => fetch(`${baseUrl}/pages/`).then(r => r.json())
  }
});



const schema = GQC.buildSchema(); // returns GraphQLSchema

export default schema;

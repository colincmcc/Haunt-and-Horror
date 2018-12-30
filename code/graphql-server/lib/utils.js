import { TypeComposer } from 'graphql-compose';
import axios from 'axios';
import { withFilter } from 'apollo-server';
import SquareConnect from 'square-connect';
import { dev, prod } from './config';
import pubsub from './subscriptions';

require('dotenv').config();

// ! TypeComposer can not add subscriptions to type yet

const baseUrl = prod.wpEndpoint;



/**
 * * SQUARE RESOLVER FUNCTIONS
 */
const squareClient = SquareConnect.ApiClient.instance;

const squareOauth2 = squareClient.authentications.oauth2;
squareOauth2.accessToken = process.env.SQUARE_ACCESS_TOKEN;

/**
 * * WORDPRESS RESOLVER FUNCTIONS
 */
// * Find one by ID
export function createFindByIdResolver(tc, urlAddr) {
  tc.addResolver({
    name: 'findById',
    type: tc,
    args: {
      id: 'Int!'
    },
    resolve: async ({ args, context }) => context.loader.load(`${baseUrl}/${urlAddr}/${args.id}/`)
  });
}

// * Resolve a list of urls
export function createFindByUrlListResolver(tc) {
  tc.addResolver({
    name: 'findByUrlList',
    type: [tc],
    resolve: ({ context }) => context.loader.loadMany(rp.args.urls)
  });
}

// * Resolve a list of IDs
export function createFindByIdListResolver(tc, urlAddr) {
  tc.addResolver({
    name: 'findByIdList',
    type: [tc],
    resolve: ({ args, context }) => {
      const urlList = args.ids.map(id => [`${baseUrl}/${urlAddr}/${id}`]);
      return context.loader.loadMany(urlList);
    }
  });
}

// * Find all of a post type
export function createFindAllResolver(tc, urlAddr) {
  tc.addResolver({
    name: 'findAll',
    type: [tc],
    resolve: ({ context }) => context.loader.load(`${baseUrl}/${urlAddr}/`)
  });
}

// * Find all of a post type with a given meta value
export function createFindByMetaResolver(tc, urlAddr, metaType) {
  tc.addResolver({
    name: 'findByMeta',
    type: [tc],
    args: {
      [metaType]: 'String!'
    },
    resolve: ({ args, context }) => context.loader.load(`${baseUrl}/${urlAddr}?${metaType}=${args[[metaType]]}`)
  });
}

// * Find all of a post type with a given meta value
export function createFindBySpecificMetaResolver(tc, urlAddr) {
  tc.addResolver({
    name: 'findBySpecificMeta',
    type: [tc],
    args: {
      metaType: 'String!',
      metaValue: 'String!'
    },
    resolve: ({ args, context }) => context.loader.load(`${baseUrl}/${urlAddr}?${args.metaType}=${args.metaValue}`)
  });
}

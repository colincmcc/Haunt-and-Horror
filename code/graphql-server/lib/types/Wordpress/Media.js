import composeWithJson from 'graphql-compose-json'
import {
  createFindByIdResolver,
  createFindByUrlListResolver,
  createFindAllResolver,
  createFindBySpecificMetaResolver
} from '../../utils';

const restApiResponse = {

  id: 41,
  date: "2018-12-01T19:49:10",
  slug: "view-menu",
  status: "publish",
  media_details: {
    width: 1280,
    height: 720,
    file: "2018/11/465560380_1280x720.jpg",
    sizes: {
        thumbnail: {
            file: "465560380_1280x720-150x150.jpg",
            width: 150,
            height: 150,
            mime_type: "image/jpeg",
            source_url: "https://hauntandhorror.com/wp-content/uploads/2018/11/465560380_1280x720-150x150.jpg"
        },
        medium: {
            file: "465560380_1280x720-300x169.jpg",
            width: 300,
            height: 169,
            mime_type: "image/jpeg",
            source_url: "https://hauntandhorror.com/wp-content/uploads/2018/11/465560380_1280x720-300x169.jpg"
        },
        medium_large: {
            file: "465560380_1280x720-768x432.jpg",
            width: 768,
            height: 432,
            mime_type: "image/jpeg",
            source_url: "https://hauntandhorror.com/wp-content/uploads/2018/11/465560380_1280x720-768x432.jpg"
        },
        large: {
            file: "465560380_1280x720-1024x576.jpg",
            width: 1024,
            height: 576,
            mime_type: "image/jpeg",
            source_url: "https://hauntandhorror.com/wp-content/uploads/2018/11/465560380_1280x720-1024x576.jpg"
        },
        full: {
            file: "465560380_1280x720.jpg",
            width: 1280,
            height: 720,
            mime_type: "image/jpeg",
            source_url: "https://hauntandhorror.com/wp-content/uploads/2018/11/465560380_1280x720.jpg"
        }
    }
}
}

export const MediaTC = composeWithJson('Media', restApiResponse)
export const MediaGraphQLType = MediaTC.getType()

createFindByIdResolver(MediaTC, 'media')
createFindByUrlListResolver(MediaTC)
createFindAllResolver(MediaTC, 'media')
createFindBySpecificMetaResolver(MediaTC, 'media')



export function getPostResolvers() {
  return {
    allMedia: MediaTC.getResolver('findAll'),
    mediaById: MediaTC.getResolver('findById'),
    mediaByMeta: MediaTC.getResolver('findBySpecificMeta'),
  }
}

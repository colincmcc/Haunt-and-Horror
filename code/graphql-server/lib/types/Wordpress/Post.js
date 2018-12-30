import composeWithJson from 'graphql-compose-json'
import {
  createFindByIdResolver,
  createFindByUrlListResolver,
  createFindAllResolver,
  createFindBySpecificMetaResolver
} from '../../utils';
import { MediaTC } from './Media'
const restApiResponse = {

  id: 41,
  date: "2018-12-01T19:49:10",
  slug: "view-menu",
  status: "publish",
  type: "header",
  link: "http://localhost:8080/header/view-menu/",
  title: {
      rendered: "View Menu"
  },
  content: {
      rendered: "Content",
  },
  content: {
    rendered: "<p style=\"text-align: center;\">Hey Indie Horror fans, we&#8217;ve recently decided to  (and will continue to) feature and commision independent artists for the blog and just received our first official piece! Without further ado, we&#8217;d like to introduce you to this wonderfully spooky image by <a href=\"https://www.behance.net/user/?username=tafloyd\"><strong>Travis Floyd</strong></a>, a freelance artist from Pittsburgh, PA focusing in Graphic Design, Print Design, Branding. Playing off of our &#8220;favorite haunt&#8221;, Travis features a ghoulish bartender with a Steven King &#8211; like touch of sophistication and underlying malevolence and we have a feeling this barkeep has got a story or two to.</p>\n<p style=\"text-align: center;\">For more spooky artwork &#8211; be it illustrations, films, writing, music, and anything in between &#8211; keep an eye out right here at Haunt and Horror!</p>\n",
    protected: false
},
author: 1,
featured_media: 170,
}

export const PostTC = composeWithJson('Post', restApiResponse)
export const PostGraphQLType = PostTC.getType()

createFindByIdResolver(PostTC, 'posts')
createFindByUrlListResolver(PostTC)
createFindAllResolver(PostTC, 'posts')
createFindBySpecificMetaResolver(PostTC, 'posts')

PostTC.addRelation('featured_image', {
  resolver: () => MediaTC.getResolver('findById'),
  prepareArgs: {
    id: source => source.featured_media
  }
});

export function getPostResolvers() {
  return {
    allPosts: PostTC.getResolver('findAll'),
    postsById: PostTC.getResolver('findById'),
    postByMeta: PostTC.getResolver('findBySpecificMeta'),
  }
}

import React from 'react';
import styled from 'styled-components';
import ImageWrapper from '../components/ImageWrapper';
import BioComponent from './BioComponent';
import PostContent from './PostContent'
;
function PostDetailComponent(props) {
  const {selectedPost } = props
console.log(selectedPost)
  const postObj = {
    title: selectedPost.title.rendered,
    content: selectedPost.content.rendered,
    featureImg: selectedPost.featured_image.media_details.sizes.large.source_url
  }
  return (
    <Article>
      <ArticleHeader>
        <Title>{postObj.title}</Title>
        <BioComponent />

      </ArticleHeader>
      <FeatureImage>
        <ImageWrapper>
          <TopImage src={postObj.featureImg} />
        </ImageWrapper>
      </FeatureImage>
      <PostContent content={postObj.content} />
    </Article>
  );
}

export default PostDetailComponent;

const Article = styled.div`
  position: relative;
  word-break: break-word;
  word-wrap: break-word;
  margin-top: 24px;
`;

const ArticleHeader = styled.div`
  max-width: 740px;
  padding: 0 24px 0 24px;
  width: 100%;
  text-align: left;
  margin: 0 auto;
`;

const Title = styled.h1`
${props => props.theme.fontStyles.heading};

`
const ArticleSubHeader = styled.div`

`;

const FeatureImage = styled.div`
margin: 36px 0px 52px 0px;
position: relative;

${props => props.theme.media.tablet_landscape_up`
margin: 80px 0 80px 0;

`};

`;

const TopImage = styled.img`
opacity: 1;
transition: visibility 0s linear 0s,opacity .4s 0s;
display: block;
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
margin: auto;
`;

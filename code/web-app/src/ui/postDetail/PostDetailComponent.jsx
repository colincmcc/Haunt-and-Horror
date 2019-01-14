import React from 'react';
import styled from 'styled-components';
import BioComponent from './BioComponent';
import PostContent from './PostContent';
import { LoadingComponent, ErrorComponent, ImageWrapper } from '../components';

function PostDetailComponent(props) {
  const { selectedPost, loading, error } = props;

  if (error) return <ErrorComponent />;
  if (loading) return <LoadingComponent large />;

  const postObj = {
    title: selectedPost.title.rendered,
    content: selectedPost.content.rendered,
    featureImg: selectedPost.featured_image.media_details.sizes.large.source_url,
  };
  return (
    <Article>
      <ArticleHeader>
        <Title dangerouslySetInnerHTML={{ __html: postObj.title }} />
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
  box-sizing: border-box;
`;

const Title = styled.h1`
${props => props.theme.fontStyles.heading};

`;
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

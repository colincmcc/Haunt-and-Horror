import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

function HomePostComponent(props) {
  const { title, featured_image, id} = props;
  console.log(props)
  const articleObj = {
    title: title.rendered,
    bgImg: featured_image.media_details.sizes.large.source_url,
    articleId: id
  }
  return (
    <Article bg={articleObj.bgImg} >
      <Description>
        <PostWrapper>
          <PostThumb>
            <img src={articleObj.bgImg} />
          </PostThumb>
          <PostContent>
            <PostHeader>
            <Link to={`/Movies/${articleObj.articleId}`} >{articleObj.title}</Link>
            </PostHeader>
          </PostContent>
        </PostWrapper>

      </Description>


    </Article>
  );
}

export default HomePostComponent;

const Article = styled.article`
background-image: url(${props => props.bg});
height: 100vh;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-attachment: fixed;
width: 100%;
position: relative;
  &before {
    content: "";
    display: block;
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
`;
const Description = styled.div`
display: table-cell;
height: 100vh;
width: 100%;
vertical-align: middle;
`;
const PostWrapper = styled.div`
margin: 0 auto;
max-width: 1060px;
width: 100%;
background-color: rgba(0, 0, 0, 0.5);
padding: 2em;
margin-bottom: 24px;
margin-top: 24px;

${props => props.theme.media.tablet_landscape_up`
max-width: 75%;
padding: 6em;
`};

`;

const PostThumb = styled.div`
display: none;

${props => props.theme.media.tablet_landscape_up`
display: none;
max-width: 100%;
overflow: hidden;
`};

`;

const PostContent = styled.div`
margin: 0 63px 0 25px;
position: relative;
z-index: 2;
color: ${props => props.theme.colors.whiteTheme};

`;

const PostHeader = styled.div`
${props => props.theme.fontStyles.heading};
${props => props.theme.media.tablet_landscape_up`
font-size: 3.5rem;
`};

`;

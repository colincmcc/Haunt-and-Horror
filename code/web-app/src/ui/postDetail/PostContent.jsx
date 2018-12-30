import React from 'react';
import styled from 'styled-components';
var __html = require('./post.txt');
// dangerouslySetInnerHTML=

function createMarkup(html) {
  return {__html: html};
}
function PostContent(props) {
  const {content} = props
  return (
    <ContentBody dangerouslySetInnerHTML={createMarkup(content)}/>

  );
}

export default PostContent;

const ContentBody = styled.div`
max-width: 740px;
padding: 0 20px 0 20px;
text-align: left;
margin: 0 auto;
`;

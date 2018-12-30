import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ImageWrapper(props) {
  const { children } = props;
  return (
    <Wrapper>
      <AspectHolder />
      {children}
    </Wrapper>
  );
}


ImageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ImageWrapper;

const Wrapper = styled.div`
position: relative;
width: 100%;
display: block;
margin: 0 auto;
`;
const AspectHolder = styled.div`
padding-bottom: 56.3%;
display: block;
`;

const FeatureImage = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;

${props => props.theme.media.tablet_landscape_up`
height: auto;
`};


`
;
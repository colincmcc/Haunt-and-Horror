import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PageWrapper = (props) => {
  const { children } = props;
  return <SectionWrapper>{children}</SectionWrapper>;
};


PageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PageWrapper;
const SectionWrapper = styled.div`
  box-sizing: border-box;
  overflow: hidden;
`;

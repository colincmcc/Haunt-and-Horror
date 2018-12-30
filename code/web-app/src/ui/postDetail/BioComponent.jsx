import React from 'react';
import styled from 'styled-components';

function BioComponent() {
  return (
    <BioWrapper>
      <Avatar src="https://cdn-images-1.medium.com/fit/c/100/100/1*Zt5G_PY72Y8NkWs9iGoc3w@2x.jpeg" />
    </BioWrapper>
  );
}

export default BioComponent;

const BioWrapper = styled.div`
display: flex;
line-height: 20px;
margin: 24px 0 24px 0;
align-items: center;
`;

const Avatar = styled.img`
flex: 0 0 auto;
display: inline-block;
border-radius: 100%;
vertical-align: middle:
width: 50px;
height: 50px;
`;

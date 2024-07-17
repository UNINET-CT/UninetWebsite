import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// Keyframes for the animation
const rotate = keyframes`
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
`;

// Styled container for the loader
const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: none;
  position: fixed;
  top: 0;
  left: 0;
`;

// Inner container that applies scaling and positioning
const LoaderInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
`;

// The actual spinning element
const Spinner = styled.div`
  position: absolute;
  width: 100px; // Reduced size
  height: 100px; // Reduced size
  border: 10px solid #74749c; // Thinner border
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
  top: 50%; // Center vertically
  left: 50%; // Center horizontally
  transform: translate(-50%, -50%); // Ensure it is perfectly centered
`;

// The HexagonLoader component
const HexagonLoader = () => {
  return (
    <LoaderContainer>
      <LoaderInner>
        <Spinner />
      </LoaderInner>
    </LoaderContainer>
  );
};

export default HexagonLoader;

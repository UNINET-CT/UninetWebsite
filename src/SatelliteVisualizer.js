import React, { useEffect } from 'react';

let globalModuleInstance = null;
let isScriptLoaded = false;

const OpenGLComponent = () => {
  useEffect(() => {
    const initializeCanvas = () => {
      const canvas = document.getElementById('canvas');
      if (canvas && globalModuleInstance) {
        globalModuleInstance.canvas = canvas;
        console.log(globalModuleInstance.canvas);
        console.log('Canvas linked to Module');

        if (!canvas.exitPointerLock) {
          canvas.exitPointerLock = () => {
            if (document.exitPointerLock) {
              document.exitPointerLock();
            }
          };
        }
      } else {
        console.error('Canvas element or module not found');
      }
    };

    if (!isScriptLoaded) {
      const script = document.createElement('script');

      // Append version to bust cache
      const version = Date.now(); // Use timestamp as a unique version
      script.src = `${process.env.PUBLIC_URL}/WebSat.js?v=${version}`;
      script.async = true;

      script.onload = () => {
        globalModuleInstance = window.Module;
        initializeCanvas();
      };

      document.body.appendChild(script);
      isScriptLoaded = true;
    } else if (globalModuleInstance) {
      let s = document.querySelector(`script[src^="${process.env.PUBLIC_URL}/WebSat.js"]`);
      if (s) {
        document.body.removeChild(s);
        console.log('Script removed, refreshing page...');

        globalModuleInstance.canvas = null;

        s = document.querySelector(`script[src^="${process.env.PUBLIC_URL}/WebSat.js"]`);
        if (!s) {
          window.location.reload();
        } else {
          console.error('Script removal failed');
        }
      }
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <canvas 
        id="canvas" 
        width="800" 
        height="600"
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
          display: 'block'
        }}
      ></canvas>
    </div>
  );
};

export default OpenGLComponent;

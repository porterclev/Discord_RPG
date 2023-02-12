import { Unity, useUnityContext } from "react-unity-webgl";

import React from "react";

const unity = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/myunityapp.loader.js",
    dataUrl: "build/myunityapp.data",
    frameworkUrl: "build/myunityapp.framework.js",
    codeUrl: "build/myunityapp.wasm",
  });

  return <Unity unityProvider={unityProvider} />;
};

export default unity;

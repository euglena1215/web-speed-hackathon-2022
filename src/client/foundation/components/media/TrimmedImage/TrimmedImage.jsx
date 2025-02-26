import React from "react";

/**
 * アスペクト比を維持したまま、要素のコンテンツボックス全体を埋めるように拡大縮小したサイズを返す
 */

/**
 * @typedef Props
 * @property {string} src
 * @property {number} width
 * @property {number} height
 */

/** @type {React.VFC<Props>} */
export const TrimmedImage = ({ height, src, width }) => {

  if (width === 100 & height === 100) {
    const url = src.replace('.jpg', '_100x100.avif')
    return <img src={url} />;
  }
  if (width === 400 & height === 225) {
    const url = src.replace('.jpg', '_400x225.avif')
    return <img src={url} />;
  }
  
  return <img src={src} />;
};

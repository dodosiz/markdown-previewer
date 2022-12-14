import * as React from "react";
import styled from "styled-components";

const PreviewDiv = styled.div`
  width: 90%;
  height: 200px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  display: inline-block;
  text-align: initial;
  overflow-y: scroll;
`;

export function Previewer(props = { html: "" }) {
  return (
    <PreviewDiv
      dangerouslySetInnerHTML={{ __html: props.html }}
      id="preview"
    ></PreviewDiv>
  );
}

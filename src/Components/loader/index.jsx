// eslint-disable-next-line @atlaskit/ui-styling-standard/use-compiled -- Ignored via go/DSP-18766
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Lozenge from "@atlaskit/lozenge";
import { token } from "@atlaskit/tokens";
import Spinner from "@atlaskit/spinner"; // Removed 'type' from import

// jonsa size shi lagay use krlo
const sizes = ["xsmall", "small", "medium", "large", "xlarge", 80]; // Removed type annotation

const containerStyles = css({
  display: "flex",
  gap: token("space.200", "16px"),
  flexWrap: "wrap",
});

const itemStyles = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: token("space.100", "8px"),
  flexDirection: "column",
});

export default function Loader() {
  return (
    <div css={containerStyles}>
      {sizes.map((size) => (
        <div key={size} css={itemStyles}>
          <Spinner size={size} label="Loading" />
          {typeof size === "number" ? (
            <Lozenge appearance="new">custom</Lozenge>
          ) : (
            <Lozenge appearance="success">{size}</Lozenge>
          )}
        </div>
      ))}
    </div>
  );
}

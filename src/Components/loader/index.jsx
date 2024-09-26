/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Spinner from "@atlaskit/spinner";
import { token } from "@atlaskit/tokens";

const containerStyles = css({
  display: "flex",
  justifyContent: "center", // Center horizontally
  alignItems: "center", // Center vertically
  height: "100vh", // Adjust height as needed
});

const itemStyles = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: token("space.100", "8px"),
});

export default function Loader() {
  return (
    <div css={containerStyles}>
      <div css={itemStyles}>
        <Spinner size={'xlarge'} label="Loading" />
      </div>
    </div>
  );
}

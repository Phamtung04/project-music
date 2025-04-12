import AccountSidebarPreview from "./AccountSidebarPreview";
import React from "react";

const createPreviewComponent = (mini) => {
  function PreviewComponent(props) {
    return <AccountSidebarPreview {...props} mini={mini} />;
  }
  return PreviewComponent;
};
export default createPreviewComponent;
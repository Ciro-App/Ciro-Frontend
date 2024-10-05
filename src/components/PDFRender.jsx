import React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";

export default function PDFRender({ newFile }) {
  const pageNavigationPluginInstance = pageNavigationPlugin();

  return (
    <div className="w-full h-full rounded-lg bg-white p-2">
      <div
        style={{
          border: "1px solid rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            backgroundColor: "#eeeeee",
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            display: "flex",
            justifyContent: "center",
            padding: "8px",
          }}
        ></div>
        <div
          style={{
            flex: 1,
            overflow: "hidden",
          }}
        >
          <Viewer
            initialPage={0}
            // defaultScale={1}
            // viewMode={ViewMode.DualPage}
            theme={{
              theme: "light",
              // direction: TextDirection.RightToLeft,
            }}
            plugins={[pageNavigationPluginInstance]}
            fileUrl={`https://firebasestorage.googleapis.com/v0/b/ciro-app-prod.appspot.com/o/${newFile}?alt=media&token=226633dd-d691-49e7-93e6-bbd5612bae4f`}
          />
        </div>
      </div>
    </div>
  );
}

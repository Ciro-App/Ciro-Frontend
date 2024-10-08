import React, { useState, useEffect } from "react";
// import ViewSDKClient from "../utils/Adobe/ViewSDKClient";
// import SdCardIcon from "@mui/icons-material/SdCard";
import FileCopySharpIcon from "@mui/icons-material/FileCopySharp";
import PDFRender from "./PDFRender";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Tooltip } from "@mui/material";
import { Document } from "react-pdf";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Spinner } from "@react-pdf-viewer/core";
import { ApiConstants } from "../Common/constants";

const PDFViewer = ({
  newFile,
  resume,
  setResume,
  setNewFiles,
  newFiles,
  index,
  setLoading,
}) => {
  // const [PDFMetadata, setPDFMetadata] = useState({ numPages: 0, fileSize: 0 });
  const [numPages, setNumPages] = useState();

  function onDocumentLoadSuccess(PDFMetadata) {
    setNumPages(PDFMetadata.numPages);
    setResume({
      ...resume,
      ["totalPages"]: resume.totalPages + PDFMetadata.numPages,
    });
    setLoading(false);
  }

  // useEffect(() => {
  //   // const viewSDKClient = new ViewSDKClient();
  //   // viewSDKClient.ready().then(async () => {
  //   //   /* Invoke file preview */
  //   //   let datas = await viewSDKClient.previewFile(
  //   //     newFile,
  //   //     {
  //   //       showAnnotationTools: false,
  //   //       enableFormFilling: false,
  //   //       showDownloadPDF: false,
  //   //       showPrintPDF: false,
  //   //       showZoomControl: true,
  //   //       /* Allowed possible values are 'FIT_PAGE', 'FIT_WIDTH', 'TWO_COLUMN', 'TWO_COLUMN_FIT_PAGE', or ''.
  //   //   FIT_WIDTH expands the page horizontally to the full width of the document pane.
  //   //   FIT_PAGE displays the entire page in the current view so that no scrolling is required.
  //   //   TWO_COLUMN displays two pages side-by-side in the current view.
  //   //   TWO_COLUMN_FIT_PAGE displays two pages side-by-side where the pages are zoomed to page level.
  //   //   Note that end users can toggle the view mode on the right hand panel. */
  //   //       defaultViewMode: "FIT_WIDTH",
  //   //       enableLinearization: true /* new new new new */,
  //   //     },
  //   //     newFile
  //   //   );
  //   //   console.log(datas);
  //   //   let datApi = await datas.getAPIs();
  //   //   let PDFMetadata = await datApi.getPDFMetadata();

  //   //   setPDFMetadata(PDFMetadata);

  //   //   setResume({
  //   //     ...resume,
  //   //     ["totalPages"]: resume.totalPages + PDFMetadata.numPages,
  //   //   });
  //   // });
  // }, []);

  function handleDeleteFile() {
    let array = new Array(newFiles.slice()).flat(1);
    array.splice(index, 1);
    setNewFiles(array);
    setResume({
      ...resume,
      ["totalPages"]: resume.totalPages - numPages,
    });
  }

  return (
    <>
      <div className="flex flex-col  justify-center w-56  md:w-52 gap-2 bg-[#121212] p-2 rounded-lg">
        <section className="flex flex-col justify-center items-center w-full">
          <span className="text-[12px] opacity-80 pb-1">Vista previa</span>
          <div className="flex w-full justify-end items-center gap-2">
            <Tooltip placement="top" title="Ver en pantalla completa">
              <a
                target="_blank"
                href={`https://firebasestorage.googleapis.com/v0/b/ciro-app-prod.appspot.com/o/${newFile}?alt=media&token=${ApiConstants.FIREBASE_STORAGE_TOKEN}`}
              >
                <VisibilityIcon
                  className="hover:bg-gray-500 rounded-lg"
                  sx={{ height: "0.7em", width: "0.7em" }}
                />
              </a>
            </Tooltip>
            <Tooltip placement="top" title="Eliminar documento">
              <DeleteIcon
                onClick={(e) => handleDeleteFile()}
                className="hover:bg-gray-500 rounded-lg"
                sx={{ height: "0.7em", width: "0.7em", zIndex: "10" }}
              />
            </Tooltip>
          </div>

          <div className="flex items-center justify-center w-full  h-[14em] rounded-lg">
            <div id={newFile} className="hidden"></div>
            <Document
              file={`https://firebasestorage.googleapis.com/v0/b/ciro-app-prod.appspot.com/o/${newFile}?alt=media&token=${ApiConstants.FIREBASE_STORAGE_TOKEN}`}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<Spinner />}
              error={"Error"}
              className={"w-full h-full"}
              renderMode="custom"
            >
              <PDFRender newFile={newFile} />
            </Document>
          </div>
        </section>
        <span className="text-[10px] opacity-70">
          {newFile?.slice(20).length > 37
            ? `${newFile?.slice(20, 50)}...`
            : `${newFile?.slice(20)}`}
        </span>
        <section className="flex justify-center items-center gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-center gap-1">
              <FileCopySharpIcon sx={{ height: "0.7em", width: "0.7em" }} />
              <span>{numPages}</span>
            </div>
            <span className="text-[12px] lg:text-[14px]  text-center ">
              {numPages > 1 ? `Páginas` : `Página`}
            </span>
          </div>
          {/* <div className="flex flex-col gap-1">
            <div className="flex items-center justify-center ">
              <div className="flex items-center justify-center gap-1">
                <SdCardIcon sx={{ height: "0.7em", width: "0.7em" }} />
              </div>

              <span>{(PDFMetadata?.fileSize / 1024 / 1024).toFixed(2)} MB</span>
            </div>
            <span className="text-[12px]  lg:text-[14px] text-center">
              Tamaño
            </span>
          </div> */}
        </section>
      </div>
    </>
  );
};

export default PDFViewer;

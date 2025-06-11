"use client"

import { useState, useEffect } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { X, Download, ZoomIn, ZoomOut, RotateCw } from "lucide-react"

// Configure PDF.js worker
if (typeof window !== "undefined") {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
}

interface ResumeProps {
    onClose: () => void
}

export default function Resume({ onClose }: ResumeProps) {
    const [numPages, setNumPages] = useState<number>(0)
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [scale, setScale] = useState<number>(1.0)
    const [rotation, setRotation] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>("")

    const pdfUrl = "/resume.pdf"

    useEffect(() => {
        fetch(pdfUrl, { method: "HEAD" })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`PDF file not found: ${response.status}`)
                }
                const contentType = response.headers.get("content-type")
                if (!contentType?.includes("pdf")) {
                    throw new Error(`File is not a PDF. Content-Type: ${contentType}`)
                }
            })
            .then(() => {
                setLoading(false)    // file exists and is valid → stop initial spinner
            })
            .catch((err) => {
                setError(`Cannot load PDF file: ${err.message}`)
                setLoading(false)
            })
    }, [pdfUrl])


    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages)
        setLoading(false)
        setError("")
    }

    function onDocumentLoadError(error: Error) {
         console.error("❌ PDF load error detail:", error);
        setError("Failed to load PDF. Please check that resume.pdf is a valid PDF file.")
        setLoading(false)
    }

    const goToPrevPage = () => {
        setPageNumber((prev) => Math.max(prev - 1, 1))
    }

    const goToNextPage = () => {
        setPageNumber((prev) => Math.min(prev + 1, numPages))
    }

    const zoomIn = () => {
        setScale((prev) => Math.min(prev + 0.2, 3.0))
    }

    const zoomOut = () => {
        setScale((prev) => Math.max(prev - 0.2, 0.5))
    }

    const rotate = () => {
        setRotation((prev) => (prev + 90) % 360)
    }

    const downloadPDF = () => {
        const link = document.createElement("a")
        link.href = pdfUrl
        link.download = "resume.pdf"
        link.target = "_blank"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white w-full h-full max-w-6xl max-h-[90vh] rounded-lg shadow-2xl flex flex-col">
                {/* Header with controls */}
                <div className="bg-white border-b p-4 rounded-t-lg">
                    <div className="flex justify-between items-center">
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <X size={20} />
                            Close
                        </button>

                        {/* PDF Controls */}
                        <div className="flex flex-wrap items-center gap-2">
                            {/* Page navigation */}
                            {numPages > 0 && (
                                <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-lg">
                                    <button
                                        onClick={goToPrevPage}
                                        disabled={pageNumber <= 1}
                                        className="px-2 py-1 text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 rounded"
                                    >
                                        ←
                                    </button>
                                    <span className="text-sm font-medium">
                                        {pageNumber} / {numPages}
                                    </span>
                                    <button
                                        onClick={goToNextPage}
                                        disabled={pageNumber >= numPages}
                                        className="px-2 py-1 text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 rounded"
                                    >
                                        →
                                    </button>
                                </div>
                            )}

                            {/* Zoom controls */}
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={zoomOut}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                    title="Zoom Out"
                                >
                                    <ZoomOut size={16} />
                                </button>
                                <span className="text-sm font-medium px-2">{Math.round(scale * 100)}%</span>
                                <button onClick={zoomIn} className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Zoom In">
                                    <ZoomIn size={16} />
                                </button>
                            </div>

                            {/* Rotate button */}
                            <button onClick={rotate} className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Rotate">
                                <RotateCw size={16} />
                            </button>

                            {/* Download button */}
                            <button
                                onClick={downloadPDF}
                                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                <Download size={16} />
                                Download
                            </button>
                        </div>
                    </div>
                </div>

                {/* PDF Viewer */}
                <div className="flex-1 overflow-auto bg-gray-100 p-4">
                    <div className="flex justify-center">
                        <div className="bg-white shadow-lg">
                            {loading && !error && (
                                <div className="flex items-center justify-center h-96 w-full">
                                    <div className="text-center">
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                                        <p className="text-gray-600">Loading resume...</p>
                                    </div>
                                </div>
                            )}

                            {error && (
                                <div className="flex items-center justify-center h-96 w-full p-8">
                                    <div className="text-center text-red-600 max-w-md">
                                        <div className="mb-4 text-6xl">📄</div>
                                        <h3 className="text-lg font-semibold mb-2">PDF Loading Error</h3>
                                        <p className="mb-4 text-sm">{error}</p>
                                        <div className="text-left text-xs text-gray-600 bg-gray-50 p-3 rounded">
                                            <p className="font-semibold mb-2">Troubleshooting steps:</p>
                                            <ul className="list-disc list-inside space-y-1">
                                                <li>Ensure resume.pdf is in the public folder</li>
                                                <li>Check that the file is a valid PDF</li>
                                                <li>Try refreshing the page</li>
                                                <li>Check browser console for more details</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {!loading && !error && (
                                <Document
                                    file={pdfUrl}
                                    onLoadSuccess={onDocumentLoadSuccess}
                                    onLoadError={onDocumentLoadError}
                                    loading={
                                        <div className="flex items-center justify-center h-96 w-full">
                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                                        </div>
                                    }
                                    options={{
                                        cMapUrl: "https://unpkg.com/pdfjs-dist@3.11.174/cmaps/",
                                        cMapPacked: true,
                                    }}
                                >
                                    <Page
                                        pageNumber={pageNumber}
                                        scale={scale}
                                        rotate={rotation}
                                        loading={
                                            <div className="flex items-center justify-center h-96 w-96">
                                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                                            </div>
                                        }
                                    />
                                </Document>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

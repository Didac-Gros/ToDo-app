import { GrGallery } from "react-icons/gr";
import { useUploadImage } from "../../hooks/useUploadImage";

interface UploadImageProps {
  onFileUpload: (file: File) => void; // Callback para manejar la subida del archivo
  error: boolean;
  image: File | null;
}

export function UploadImage({ onFileUpload, error, image }: UploadImageProps) {
  const {
    isDragging,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFileInput,
  } = useUploadImage({ onFileUpload });
  
  return (
    <div>
      <p className="font-semibold mb-1">Upload image</p>

      <div
        className={`border-1 ${
          isDragging ? "border-[#ff6867]" : "border-gray-400"
        } rounded-md p-5 ${
          image ? "" : "py-9"
        } text-center cursor-grab transition-colors h-auto    ${
          error ? "border-red-500" : "border-gray-400"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt="Uploaded image"
            className="size-20 mx-auto mb-2"
          />
        ) : (
          <GrGallery size={50} className="mx-auto text-gray-600 mb-2" />
        )}
        <p className="text-gray-600">Drag & Drop files here</p>
        <label
          htmlFor="fileInput"
          className="mt-2 px-4 py-2 border-1 text-gray-600 text-sm rounded-lg inline-block cursor-pointer hover:bg-orange-500 hover:text-white transition duration-200"
        >
          {image ? "Change" : "Browse"}
        </label>
        <input
          id="fileInput"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileInput}
        />
      </div>

      <p className="text-xs text-red-500">{error ? "Upload an image" : ""}</p>
    </div>
  );
}

import React, { useState, useCallback } from "react";
import { GrGallery } from "react-icons/gr";

interface UploadImageProps {
  onFileUpload: (file: File) => void; // Callback para manejar la subida del archivo
}

export function UploadImage({ onFileUpload }: UploadImageProps) {
  const [isDragging, setIsDragging] = useState(false);

  // Maneja el evento de arrastrar sobre el área
  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  // Maneja el evento de salir del área
  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Maneja el evento de soltar el archivo
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);

      const file = e.dataTransfer.files[0]; // Obtiene el primer archivo
      if (file && file.type.startsWith("image/")) {
        onFileUpload(file); // Llama al callback con el archivo
      } else {
        alert("Por favor, sube una imagen válida.");
      }
    },
    [onFileUpload]
  );

  // Maneja la selección de archivos desde el input
  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]; // Obtiene el primer archivo
      if (file && file.type.startsWith("image/")) {
        onFileUpload(file); // Llama al callback con el archivo
      } else {
        alert("Por favor, sube una imagen válida.");
      }
    },
    [onFileUpload]
  );

  return (
    <div>
        <p className="font-semibold mb-1">Upload image</p>
      <div
        className={`border-1 ${
          isDragging ? "border-[#ff6867]" : "border-gray-400"
        } rounded-md p-6 text-center cursor-grab transition-colors h-auto    `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <GrGallery size={50} className="mx-auto text-gray-600 mb-2" />
        <p className="text-gray-600">Drag & Drop files here</p>
        <p className="text-gray-600">or</p>
        <label
          htmlFor="fileInput"
          className="mt-2 px-4 py-2 border-1 text-gray-600 text-sm rounded-lg inline-block cursor-pointer hover:bg-orange-500 hover:text-white transition duration-200" 
        >
          Browse
        </label>
        <input
          id="fileInput"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileInput}
        />
      </div>
    </div>
  );
}

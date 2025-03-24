import { useCallback, useState } from "react";

interface UseUploadImageProps {
  onFileUpload: (file: File) => void;
}

export function useUploadImage({
  onFileUpload,
}: UseUploadImageProps) {
  const [isDragging, setIsDragging] = useState(false);

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

  return {
    isDragging,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFileInput,
  };
}

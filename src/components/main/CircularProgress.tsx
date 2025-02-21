import React from "react";

interface CircularProgressProps {
  percentage: number;
  color: string;
  name: string;
}

const CircularProgress = ({
  percentage,
  color,
  name,
}: CircularProgressProps) => {
  const radius = 40; // Radio del círculo
  const circumference = 2 * Math.PI * radius; // Circunferencia del círculo
  const offset = circumference - (percentage / 100) * circumference; // Calcular progreso

  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <svg width="125" height="125" viewBox="0 0 100 100">
        {/* Círculo de fondo */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="gray"
          strokeWidth="8"
          opacity="0.2"
        />
        {/* Círculo de progreso */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)" // Rotar para iniciar desde arriba
          className="transition-all duration-500 ease-in-out"
        />
        {/* Texto con el porcentaje */}
        <text
          x="50"
          y="55"
          textAnchor="middle"
          fontSize="18"
          fill="black"
          fontWeight="bold"
        >
          {percentage}%
        </text>
      </svg>
      <div className="flex gap-2 items-center font-semibold">
        <span className="size-2 rounded-full" style={{background: `${color}`}}></span>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default CircularProgress;

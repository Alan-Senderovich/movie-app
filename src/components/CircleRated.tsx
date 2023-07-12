import { FC } from 'react';

interface CircleRatedProps {
  percentage: number;
  size: number;
  fontSize: number
}

const CircleRated: FC<CircleRatedProps> = ({ percentage, size, fontSize }) => {
  const strokeWidth = 3; // Ancho de la línea del círculo
  const radius = size; // Radio del círculo
  const innerRadius = radius - strokeWidth - 2; // Radio del círculo interno
  const circumference = 2 * Math.PI * innerRadius; // Circunferencia del círculo interno

  // Calcula la longitud del trazo según el porcentaje
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Determina el color del perímetro según el porcentaje
  let strokeColor;
  if (percentage < 25) {
    strokeColor = 'red';
  } else if (percentage < 75) {
    strokeColor = '#d2d531';
  } else if (percentage <= 100) {
    strokeColor = '#21d07a';
  }

  return (
    <svg width={radius * 2} height={radius * 2}>
      <circle
        cx={radius}
        cy={radius}
        r={radius}
        fill="#081c22"
      />
      <circle
        cx={radius}
        cy={radius}
        r={innerRadius}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        transform={`rotate(-90 ${radius} ${radius})`} // Girar el círculo -90 grados para que el inicio sea en la parte superior
      />
      <text x={radius} y={radius} textAnchor="middle" dominantBaseline="central" fill="white" fontSize={`${fontSize}`} fontWeight={700}>
        {percentage}
        <tspan  fontSize="8" dy='-0.2em'>%</tspan>
      </text>
    </svg>
  );
};

export default CircleRated;

const SparkleIcon = ({ width = 40, height = 40 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 0 C60 35, 65 40, 100 50 C65 60, 60 65, 50 100 C40 65, 35 60, 0 50 C35 40, 40 35, 50 0 Z"
        fill="#A0FF00"
      />
    </svg>
  );
};

export default SparkleIcon;

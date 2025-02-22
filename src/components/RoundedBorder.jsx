/* eslint-disable react/prop-types */
export default function RoundedBorder({ className }) {
  return (
    <div
      className={`absolute h-5 bg-transparent w-5 rounded-full ${className}`}
    ></div>
  );
}

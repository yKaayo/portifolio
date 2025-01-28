/* eslint-disable react/prop-types */
export default function RoundedBorder(props) {
  return (
    <div
      className={`absolute h-5 bg-transparent w-5 rounded-full ${props.class}`}
    ></div>
  );
}

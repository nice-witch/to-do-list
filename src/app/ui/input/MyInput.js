export default function MyInput({ px, py, ...props }) {
  return (
    <input
      className={`w-full py-${py} px-${px} text-neutral-500 border border-neutral-200 rounded-lg bg-transparent focus:outline-0`}
      {...props}
    />
  );
}

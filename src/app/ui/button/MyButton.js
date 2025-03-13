export default function MyButton({ children, classes, ...props }) {
  return (
    <button className={`${classes} rounded-lg`} {...props}>
      {children}
    </button>
  );
}

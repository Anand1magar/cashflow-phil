// figma node: 1:808 My Phil / 24 / plus-sm
export function MyPhil24PlusSm(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(42,42,46)",
      ...props.style,
    }}>
      <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
        position: "absolute",
        left: 4,
        top: 4,
        width: 16,
        height: 16,
      }}>
        <path d={"M 0 6.271 L 16 6.271 L 16 9.729 L 0 9.729 L 0 6.271 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 9.729 0 L 9.729 16 L 6.271 16 L 6.271 0 L 9.729 0 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default MyPhil24PlusSm;

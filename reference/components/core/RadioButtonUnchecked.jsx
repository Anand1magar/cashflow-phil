// figma node: 1:1506 radio_button_unchecked (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2);

export function RadioButtonUnchecked(_p = {}) {
  const props = { ..._p, style2: _p.style2 ?? "filled" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style,
    }}>
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 20,
        height: 20,
      }}>
        <path d={"M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 18 C 5.58 18 2 14.42 2 10 C 2 5.58 5.58 2 10 2 C 14.42 2 18 5.58 18 10 C 18 14.42 14.42 18 10 18 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: Style=Filled
    "style2=filled": __body0,
    // figma: Style=Outlined
    "style2=outlined": __body0,
    // figma: Style=Round
    "style2=round": __body0,
    // figma: Style=Sharp
    "style2=sharp": __body0,
    // figma: Style=Two Tone
    "style2=two tone": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default RadioButtonUnchecked;

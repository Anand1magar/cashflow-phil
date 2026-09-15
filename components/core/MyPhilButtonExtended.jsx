import { MyPhil24PlusSm } from './MyPhil24PlusSm.jsx';

// figma node: 1:812 My Phil Button Extended (32 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "device=" + __venc(p.device) + '|' + "hirerarchy=" + __venc(p.hirerarchy) + '|' + "state=" + __venc(p.state);

export function MyPhilButtonExtended(_p = {}) {
  const props = { ..._p, showLabel: _p.showLabel ?? true, buttonLabel: _p.buttonLabel ?? "Label", device: _p.device ?? "desktop", showRightIcon: _p.showRightIcon ?? false, hirerarchy: _p.hirerarchy ?? "primary", showLeftIcon: _p.showLeftIcon ?? false, state: _p.state ?? "hover" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: '100%',
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      backgroundColor: "rgb(35,99,195)",
      boxShadow: "inset 0 0 0 1px rgb(35,99,195)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 124,
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(35,99,195)",
        textDecoration: "underline",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: '100%',
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgb(35,99,195)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(35,99,195)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: '100%',
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(82,82,82)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(35,99,195)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(82,82,82)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(35,99,195)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: '100%',
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(117,117,117)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(117,117,117)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(117,117,117)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(117,117,117)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: '100%',
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(66,66,66)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(66,66,66)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(66,66,66)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(66,66,66)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: '100%',
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(186,186,186)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(186,186,186)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(186,186,186)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(186,186,186)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: '100%',
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      backgroundColor: "rgb(79,130,207)",
      boxShadow: "inset 0 0 0 1px rgb(79,130,207)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 124,
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(79,130,207)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(79,130,207)",
        textDecoration: "underline",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(79,130,207)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: '100%',
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgb(79,130,207)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(79,130,207)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(79,130,207)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(79,130,207)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: '100%',
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      backgroundColor: "rgb(28,79,156)",
      boxShadow: "inset 0 0 0 1px rgb(28,79,156)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 124,
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(28,79,156)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(28,79,156)",
        textDecoration: "underline",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(28,79,156)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: '100%',
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgb(28,79,156)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(28,79,156)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(28,79,156)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(28,79,156)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: '100%',
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      backgroundColor: "rgb(167,193,231)",
      boxShadow: "inset 0 0 0 1px rgb(167,193,231)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 124,
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(167,193,231)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(167,193,231)",
        textDecoration: "underline",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(167,193,231)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: '100%',
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgb(167,193,231)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(167,193,231)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(167,193,231)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(167,193,231)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: '100%',
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      backgroundColor: "rgb(35,99,195)",
      boxShadow: "inset 0 0 0 1px rgb(35,99,195)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 124,
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(35,99,195)",
        textDecoration: "underline",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: '100%',
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgb(35,99,195)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(35,99,195)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: '100%',
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(82,82,82)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(35,99,195)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(82,82,82)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(35,99,195)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: '100%',
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(117,117,117)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(117,117,117)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(117,117,117)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(117,117,117)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: '100%',
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(66,66,66)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(66,66,66)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(66,66,66)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(66,66,66)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: '100%',
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(186,186,186)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(186,186,186)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(186,186,186)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(186,186,186)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: '100%',
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      backgroundColor: "rgb(79,130,207)",
      boxShadow: "inset 0 0 0 1px rgb(79,130,207)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: 124,
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(79,130,207)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(79,130,207)",
        textDecoration: "underline",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(79,130,207)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: '100%',
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgb(79,130,207)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(79,130,207)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(79,130,207)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(79,130,207)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: '100%',
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      backgroundColor: "rgb(28,79,156)",
      boxShadow: "inset 0 0 0 1px rgb(28,79,156)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: 124,
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(28,79,156)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(28,79,156)",
        textDecoration: "underline",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(28,79,156)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: '100%',
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgb(28,79,156)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(28,79,156)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(28,79,156)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(28,79,156)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: '100%',
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      backgroundColor: "rgb(167,193,231)",
      boxShadow: "inset 0 0 0 1px rgb(167,193,231)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(255,255,255)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: 124,
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(167,193,231)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(167,193,231)",
        textDecoration: "underline",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(167,193,231)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: '100%',
      minWidth: 124,
      maxWidth: 289,
      maxHeight: null,
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgb(167,193,231)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showLeftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(167,193,231)",
        }}>{props.iconLeft ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(167,193,231)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
      )}
      {props.showRightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(167,193,231)",
        }}>{props.iconRight ?? <MyPhil24PlusSm style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __impls = {
    // figma: Device=Mobile, Hirerarchy=Primary, State=Default
    "device=mobile|hirerarchy=primary|state=default": __body0,
    // figma: Device=Mobile, Hirerarchy=Link, State=Default
    "device=mobile|hirerarchy=link|state=default": __body1,
    // figma: Device=Mobile, Hirerarchy=Secondary, State=Default
    "device=mobile|hirerarchy=secondary|state=default": __body2,
    // figma: Device=Mobile, Hirerarchy=Tertiary, State=Default
    "device=mobile|hirerarchy=tertiary|state=default": __body3,
    // figma: Device=Mobile, Hirerarchy=Tertiary, State=Hover
    "device=mobile|hirerarchy=tertiary|state=hover": __body4,
    // figma: Device=Mobile, Hirerarchy=Tertiary, State=Clicked
    "device=mobile|hirerarchy=tertiary|state=clicked": __body5,
    // figma: Device=Mobile, Hirerarchy=Tertiary, State=Disabled
    "device=mobile|hirerarchy=tertiary|state=disabled": __body6,
    // figma: Device=Mobile, Hirerarchy=Primary, State=Hover
    "device=mobile|hirerarchy=primary|state=hover": __body7,
    // figma: Device=Mobile, Hirerarchy=Link, State=Hover
    "device=mobile|hirerarchy=link|state=hover": __body8,
    // figma: Device=Mobile, Hirerarchy=Secondary, State=Hover
    "device=mobile|hirerarchy=secondary|state=hover": __body9,
    // figma: Device=Mobile, Hirerarchy=Primary, State=Clicked
    "device=mobile|hirerarchy=primary|state=clicked": __body10,
    // figma: Device=Mobile, Hirerarchy=Link, State=Clicked
    "device=mobile|hirerarchy=link|state=clicked": __body11,
    // figma: Device=Mobile, Hirerarchy=Secondary, State=Clicked
    "device=mobile|hirerarchy=secondary|state=clicked": __body12,
    // figma: Device=Mobile, Hirerarchy=Primary, State=Disabled
    "device=mobile|hirerarchy=primary|state=disabled": __body13,
    // figma: Device=Mobile, Hirerarchy=Link, State=Disabled
    "device=mobile|hirerarchy=link|state=disabled": __body14,
    // figma: Device=Mobile, Hirerarchy=Secondary, State=Disabled
    "device=mobile|hirerarchy=secondary|state=disabled": __body15,
    // figma: Device=Desktop, Hirerarchy=Primary, State=Default
    "device=desktop|hirerarchy=primary|state=default": __body16,
    // figma: Device=Desktop, Hirerarchy=Link, State=Default
    "device=desktop|hirerarchy=link|state=default": __body17,
    // figma: Device=Desktop, Hirerarchy=Secondary, State=Default
    "device=desktop|hirerarchy=secondary|state=default": __body18,
    // figma: Device=Desktop, Hirerarchy=Tertiary, State=Default
    "device=desktop|hirerarchy=tertiary|state=default": __body19,
    // figma: Device=Desktop, Hirerarchy=Tertiary, State=Hover
    "device=desktop|hirerarchy=tertiary|state=hover": __body20,
    // figma: Device=Desktop, Hirerarchy=Tertiary, State=Clicked
    "device=desktop|hirerarchy=tertiary|state=clicked": __body21,
    // figma: Device=Desktop, Hirerarchy=Tertiary, State=Disabled
    "device=desktop|hirerarchy=tertiary|state=disabled": __body22,
    // figma: Device=Desktop, Hirerarchy=Primary, State=Hover
    "device=desktop|hirerarchy=primary|state=hover": __body23,
    // figma: Device=Desktop, Hirerarchy=Link, State=Hover
    "device=desktop|hirerarchy=link|state=hover": __body24,
    // figma: Device=Desktop, Hirerarchy=Secondary, State=Hover
    "device=desktop|hirerarchy=secondary|state=hover": __body25,
    // figma: Device=Desktop, Hirerarchy=Primary, State=Clicked
    "device=desktop|hirerarchy=primary|state=clicked": __body26,
    // figma: Device=Desktop, Hirerarchy=Link, State=Clicked
    "device=desktop|hirerarchy=link|state=clicked": __body27,
    // figma: Device=Desktop, Hirerarchy=Secondary, State=Clicked
    "device=desktop|hirerarchy=secondary|state=clicked": __body28,
    // figma: Device=Desktop, Hirerarchy=Primary, State=Disabled
    "device=desktop|hirerarchy=primary|state=disabled": __body29,
    // figma: Device=Desktop, Hirerarchy=Link, State=Disabled
    "device=desktop|hirerarchy=link|state=disabled": __body30,
    // figma: Device=Desktop, Hirerarchy=Secondary, State=Disabled
    "device=desktop|hirerarchy=secondary|state=disabled": __body31,
  };
  return (__impls[__vkey(props)] ?? __body23)();
}
export default MyPhilButtonExtended;

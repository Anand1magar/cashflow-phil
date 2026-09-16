import { RadioButtonChecked } from './RadioButtonChecked.jsx';
import { RadioButtonUnchecked } from './RadioButtonUnchecked.jsx';

// figma node: 1:1530 Radio Buttons (38 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "device=" + __venc(p.device) + '|' + "borderless=" + __venc(p.borderless) + '|' + "selected=" + __venc(p.selected) + '|' + "text=" + __venc(p.text) + '|' + "state=" + __venc(p.state);

export function RadioButtons(_p = {}) {
  const props = { ..._p, supportingText: _p.supportingText ?? false, device: _p.device ?? "mobile", borderless: _p.borderless ?? false, selected: _p.selected ?? true, text: _p.text ?? false, state: _p.state ?? "enabled" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <RadioButtonUnchecked style2={"outlined"} />}</div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(214,214,214)",
          display: "flex",
          flexDirection: "row",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <RadioButtonUnchecked style2={"outlined"} />}</div>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,230,230)",
          display: "flex",
          flexDirection: "row",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <RadioButtonUnchecked style2={"outlined"} />}</div>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 288,
      minWidth: 100,
      maxWidth: 288,
      maxHeight: null,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(215,220,220)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 8px 12px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <RadioButtonUnchecked style2={"outlined"} />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.002em",
          color: "rgb(10,10,10)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Here"}</span>
        {props.supportingText && (
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "0.003em",
          color: "rgb(82,82,82)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Supporting label"}</span>
        )}
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 288,
      minWidth: 100,
      maxWidth: 600,
      maxHeight: null,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(215,220,220)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 8px 12px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <RadioButtonUnchecked style2={"outlined"} />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 18,
          lineHeight: "28px",
          letterSpacing: "0.002em",
          color: "rgb(10,10,10)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Here"}</span>
        {props.supportingText && (
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.002em",
          color: "rgb(82,82,82)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Supporting label"}</span>
        )}
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 288,
      minWidth: 100,
      maxWidth: 288,
      maxHeight: null,
      borderRadius: 4,
      backgroundColor: "rgb(230,230,230)",
      boxShadow: "inset 0 0 0 1px rgb(230,230,230)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 8px 12px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <RadioButtonUnchecked style2={"outlined"} />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.002em",
          color: "rgb(10,10,10)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Here"}</span>
        {props.supportingText && (
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "0.003em",
          color: "rgb(82,82,82)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Supporting label"}</span>
        )}
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 288,
      minWidth: 100,
      maxWidth: 600,
      maxHeight: null,
      borderRadius: 4,
      backgroundColor: "rgb(230,230,230)",
      boxShadow: "inset 0 0 0 1px rgb(230,230,230)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 8px 12px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <RadioButtonUnchecked style2={"outlined"} />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 18,
          lineHeight: "28px",
          letterSpacing: "0.002em",
          color: "rgb(10,10,10)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Here"}</span>
        {props.supportingText && (
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.002em",
          color: "rgb(82,82,82)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Supporting label"}</span>
        )}
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 288,
      minWidth: 100,
      maxWidth: 288,
      maxHeight: null,
      borderRadius: 4,
      backgroundColor: "rgb(214,214,214)",
      boxShadow: "inset 0 0 0 1px rgb(214,214,214)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 8px 12px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <RadioButtonUnchecked style2={"outlined"} />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.002em",
          color: "rgb(10,10,10)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Here"}</span>
        {props.supportingText && (
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "0.003em",
          color: "rgb(82,82,82)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Supporting label"}</span>
        )}
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 288,
      minWidth: 100,
      maxWidth: 600,
      maxHeight: null,
      borderRadius: 4,
      backgroundColor: "rgb(214,214,214)",
      boxShadow: "inset 0 0 0 1px rgb(214,214,214)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 8px 12px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <RadioButtonUnchecked style2={"outlined"} />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 18,
          lineHeight: "28px",
          letterSpacing: "0.002em",
          color: "rgb(10,10,10)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Here"}</span>
        {props.supportingText && (
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.002em",
          color: "rgb(82,82,82)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Supporting label"}</span>
        )}
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 288,
      minWidth: 100,
      maxWidth: 288,
      maxHeight: null,
      borderRadius: 4,
      backgroundColor: "rgb(244,244,244)",
      boxShadow: "inset 0 0 0 1px rgb(215,220,220)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 8px 12px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <RadioButtonUnchecked style2={"outlined"} />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.002em",
          color: "rgb(158,158,158)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Here"}</span>
        {props.supportingText && (
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "0.003em",
          color: "rgb(158,158,158)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Supporting label"}</span>
        )}
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 288,
      minWidth: 100,
      maxWidth: 600,
      maxHeight: null,
      borderRadius: 4,
      backgroundColor: "rgb(244,244,244)",
      boxShadow: "inset 0 0 0 1px rgb(215,220,220)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 8px 12px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <RadioButtonUnchecked style2={"outlined"} />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 18,
          lineHeight: "28px",
          letterSpacing: "0.002em",
          color: "rgb(158,158,158)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Here"}</span>
        {props.supportingText && (
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.002em",
          color: "rgb(158,158,158)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Supporting label"}</span>
        )}
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 288,
      minWidth: 100,
      maxWidth: 288,
      maxHeight: null,
      borderRadius: 4,
      backgroundColor: "rgb(236,241,249)",
      boxShadow: "inset 0 0 0 1px rgb(35,99,195)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 8px 12px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <RadioButtonChecked style2={"outlined"} />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.002em",
          color: "rgb(10,10,10)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Here"}</span>
        {props.supportingText && (
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "0.003em",
          color: "rgb(82,82,82)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Supporting label"}</span>
        )}
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 288,
      minWidth: 100,
      maxWidth: 600,
      maxHeight: null,
      borderRadius: 4,
      backgroundColor: "rgb(236,241,249)",
      boxShadow: "inset 0 0 0 1px rgb(35,99,195)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 8px 12px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <RadioButtonChecked style2={"outlined"} />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 18,
          lineHeight: "28px",
          letterSpacing: "0.002em",
          color: "rgb(10,10,10)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Here"}</span>
        {props.supportingText && (
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.002em",
          color: "rgb(82,82,82)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Supporting label"}</span>
        )}
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 288,
      minWidth: 100,
      maxWidth: 288,
      maxHeight: null,
      borderRadius: 4,
      backgroundColor: "rgb(225,235,250)",
      boxShadow: "inset 0 0 0 1px rgb(35,99,195)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 8px 12px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <RadioButtonChecked style2={"outlined"} />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.002em",
          color: "rgb(10,10,10)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Here"}</span>
        {props.supportingText && (
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "0.003em",
          color: "rgb(82,82,82)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Supporting label"}</span>
        )}
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 288,
      minWidth: 100,
      maxWidth: 600,
      maxHeight: null,
      borderRadius: 4,
      backgroundColor: "rgb(225,235,250)",
      boxShadow: "inset 0 0 0 1px rgb(35,99,195)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 8px 12px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <RadioButtonChecked style2={"outlined"} />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 18,
          lineHeight: "28px",
          letterSpacing: "0.002em",
          color: "rgb(10,10,10)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Here"}</span>
        {props.supportingText && (
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.002em",
          color: "rgb(82,82,82)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Supporting label"}</span>
        )}
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 288,
      minWidth: 100,
      maxWidth: 288,
      maxHeight: null,
      borderRadius: 4,
      backgroundColor: "rgb(203,220,246)",
      boxShadow: "inset 0 0 0 1px rgb(35,99,195)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 8px 12px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <RadioButtonChecked style2={"outlined"} />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.002em",
          color: "rgb(10,10,10)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Here"}</span>
        {props.supportingText && (
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "0.003em",
          color: "rgb(82,82,82)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Supporting label"}</span>
        )}
      </div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 288,
      minWidth: 100,
      maxWidth: 600,
      maxHeight: null,
      borderRadius: 4,
      backgroundColor: "rgb(203,220,246)",
      boxShadow: "inset 0 0 0 1px rgb(35,99,195)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 8px 12px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <RadioButtonChecked style2={"outlined"} />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 18,
          lineHeight: "28px",
          letterSpacing: "0.002em",
          color: "rgb(10,10,10)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Here"}</span>
        {props.supportingText && (
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.002em",
          color: "rgb(82,82,82)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Supporting label"}</span>
        )}
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 288,
      minWidth: 100,
      maxWidth: 288,
      maxHeight: null,
      borderRadius: 4,
      backgroundColor: "rgb(244,244,244)",
      boxShadow: "inset 0 0 0 1px rgb(215,220,220)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 8px 12px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <RadioButtonChecked style2={"outlined"} />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.002em",
          color: "rgb(158,158,158)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Here"}</span>
        {props.supportingText && (
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "0.003em",
          color: "rgb(158,158,158)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Supporting label"}</span>
        )}
      </div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: 288,
      minWidth: 100,
      maxWidth: 600,
      maxHeight: null,
      borderRadius: 4,
      backgroundColor: "rgb(244,244,244)",
      boxShadow: "inset 0 0 0 1px rgb(215,220,220)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 8px 12px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <RadioButtonChecked style2={"outlined"} />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 18,
          lineHeight: "28px",
          letterSpacing: "0.002em",
          color: "rgb(158,158,158)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Here"}</span>
        {props.supportingText && (
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.002em",
          color: "rgb(158,158,158)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Supporting label"}</span>
        )}
      </div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
              color: "rgb(82,139,224)",
            }}>{props.icon1 ?? <RadioButtonChecked style2={"outlined"} />}</div>
        </div>
      </div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(203,220,246)",
          display: "flex",
          flexDirection: "row",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <RadioButtonChecked style2={"outlined"} />}</div>
        </div>
      </div>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(225,235,250)",
          display: "flex",
          flexDirection: "row",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <RadioButtonChecked style2={"outlined"} />}</div>
        </div>
      </div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <RadioButtonChecked style2={"outlined"} />}</div>
        </div>
      </div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 288,
      minWidth: 100,
      maxWidth: 288,
      maxHeight: null,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 0px 12px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 24,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <RadioButtonChecked style2={"outlined"} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.002em",
          color: "rgb(10,10,10)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Here"}</span>
        {props.supportingText && (
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "0.003em",
          color: "rgb(82,82,82)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Supporting label"}</span>
        )}
      </div>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: 288,
      minWidth: 100,
      maxWidth: 600,
      maxHeight: null,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 0px 12px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <RadioButtonChecked style2={"outlined"} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 18,
          lineHeight: "28px",
          letterSpacing: "0.002em",
          color: "rgb(10,10,10)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Here"}</span>
        {props.supportingText && (
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.002em",
          color: "rgb(82,82,82)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Supporting label"}</span>
        )}
      </div>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: 288,
      minWidth: 100,
      maxWidth: 288,
      maxHeight: null,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 0px 12px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <RadioButtonUnchecked style2={"outlined"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.002em",
          color: "rgb(10,10,10)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Here"}</span>
        {props.supportingText && (
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "0.003em",
          color: "rgb(82,82,82)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Supporting label"}</span>
        )}
      </div>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: 288,
      minWidth: 100,
      maxWidth: 600,
      maxHeight: null,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 0px 12px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon1 ?? <RadioButtonUnchecked style2={"outlined"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 18,
          lineHeight: "28px",
          letterSpacing: "0.002em",
          color: "rgb(10,10,10)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Here"}</span>
        {props.supportingText && (
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.002em",
          color: "rgb(82,82,82)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Supporting label"}</span>
        )}
      </div>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: 288,
      minWidth: 100,
      maxWidth: 288,
      maxHeight: null,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 0px 12px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <RadioButtonUnchecked style2={"outlined"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.002em",
          color: "rgb(158,158,158)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Here"}</span>
        {props.supportingText && (
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "0.003em",
          color: "rgb(158,158,158)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Supporting label"}</span>
        )}
      </div>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: 288,
      minWidth: 100,
      maxWidth: 600,
      maxHeight: null,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 0px 12px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon1 ?? <RadioButtonUnchecked style2={"outlined"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 18,
          lineHeight: "28px",
          letterSpacing: "0.002em",
          color: "rgb(158,158,158)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Here"}</span>
        {props.supportingText && (
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.002em",
          color: "rgb(158,158,158)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Supporting label"}</span>
        )}
      </div>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: 288,
      minWidth: 100,
      maxWidth: 288,
      maxHeight: null,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 0px 12px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(82,139,224)",
        }}>{props.icon1 ?? <RadioButtonChecked style2={"outlined"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.002em",
          color: "rgb(158,158,158)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Here"}</span>
        {props.supportingText && (
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "0.003em",
          color: "rgb(158,158,158)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Supporting label"}</span>
        )}
      </div>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: 288,
      minWidth: 100,
      maxWidth: 600,
      maxHeight: null,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 0px 12px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
          color: "rgb(82,139,224)",
        }}>{props.icon1 ?? <RadioButtonChecked style2={"outlined"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 18,
          lineHeight: "28px",
          letterSpacing: "0.002em",
          color: "rgb(158,158,158)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Here"}</span>
        {props.supportingText && (
        <span style={{
          position: "relative",
          fontFamily: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.002em",
          color: "rgb(158,158,158)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Supporting label"}</span>
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: Device=Mobile, Selected=false, State=Disabled, Text=False, Borderless=False
    "device=mobile|borderless=false|selected=false|text=false|state=disabled": __body0,
    // figma: Device=Mobile, Selected=false, State=Pressed, Text=False, Borderless=False
    "device=mobile|borderless=false|selected=false|text=false|state=pressed": __body1,
    // figma: Device=Mobile, Selected=false, State=Focused, Text=False, Borderless=False
    "device=mobile|borderless=false|selected=false|text=false|state=focused": __body1,
    // figma: Device=Mobile, Selected=false, State=Hovered, Text=False, Borderless=False
    "device=mobile|borderless=false|selected=false|text=false|state=hovered": __body2,
    // figma: Device=Mobile, Selected=false, State=Enabled, Text=False, Borderless=False
    "device=mobile|borderless=false|selected=false|text=false|state=enabled": __body0,
    // figma: Device=Mobile, Selected=false, State=Enabled, Text=True, Borderless=False
    "device=mobile|borderless=false|selected=false|text=true|state=enabled": __body3,
    // figma: Device=Desktop, Selected=false, State=Enabled, Text=True, Borderless=False
    "device=desktop|borderless=false|selected=false|text=true|state=enabled": __body4,
    // figma: Device=Mobile, Selected=false, State=Hovered, Text=True, Borderless=False
    "device=mobile|borderless=false|selected=false|text=true|state=hovered": __body5,
    // figma: Device=Desktop, Selected=false, State=Hovered, Text=True, Borderless=False
    "device=desktop|borderless=false|selected=false|text=true|state=hovered": __body6,
    // figma: Device=Mobile, Selected=false, State=Focused, Text=True, Borderless=False
    "device=mobile|borderless=false|selected=false|text=true|state=focused": __body7,
    // figma: Device=Desktop, Selected=false, State=Focused, Text=True, Borderless=False
    "device=desktop|borderless=false|selected=false|text=true|state=focused": __body8,
    // figma: Device=Mobile, Selected=false, State=Pressed, Text=True, Borderless=False
    "device=mobile|borderless=false|selected=false|text=true|state=pressed": __body7,
    // figma: Device=Desktop, Selected=false, State=Pressed, Text=True, Borderless=False
    "device=desktop|borderless=false|selected=false|text=true|state=pressed": __body8,
    // figma: Device=Mobile, Selected=false, State=Disabled, Text=True, Borderless=False
    "device=mobile|borderless=false|selected=false|text=true|state=disabled": __body9,
    // figma: Device=Desktop, Selected=false, State=Disabled, Text=True, Borderless=False
    "device=desktop|borderless=false|selected=false|text=true|state=disabled": __body10,
    // figma: Device=Mobile, Selected=true, State=Enabled, Text=True, Borderless=False
    "device=mobile|borderless=false|selected=true|text=true|state=enabled": __body11,
    // figma: Device=Desktop, Selected=true, State=Enabled, Text=True, Borderless=False
    "device=desktop|borderless=false|selected=true|text=true|state=enabled": __body12,
    // figma: Device=Mobile, Selected=true, State=Hovered, Text=True, Borderless=False
    "device=mobile|borderless=false|selected=true|text=true|state=hovered": __body13,
    // figma: Device=Desktop, Selected=true, State=Hovered, Text=True, Borderless=False
    "device=desktop|borderless=false|selected=true|text=true|state=hovered": __body14,
    // figma: Device=Mobile, Selected=true, State=Focused, Text=True, Borderless=False
    "device=mobile|borderless=false|selected=true|text=true|state=focused": __body15,
    // figma: Device=Desktop, Selected=true, State=Focused, Text=True, Borderless=False
    "device=desktop|borderless=false|selected=true|text=true|state=focused": __body16,
    // figma: Device=Mobile, Selected=true, State=Pressed, Text=True, Borderless=False
    "device=mobile|borderless=false|selected=true|text=true|state=pressed": __body15,
    // figma: Device=Desktop, Selected=true, State=Pressed, Text=True, Borderless=False
    "device=desktop|borderless=false|selected=true|text=true|state=pressed": __body16,
    // figma: Device=Mobile, Selected=true, State=Disabled, Text=True, Borderless=False
    "device=mobile|borderless=false|selected=true|text=true|state=disabled": __body17,
    // figma: Device=Desktop, Selected=true, State=Disabled, Text=True, Borderless=False
    "device=desktop|borderless=false|selected=true|text=true|state=disabled": __body18,
    // figma: Device=Mobile, Selected=true, State=Disabled, Text=False, Borderless=False
    "device=mobile|borderless=false|selected=true|text=false|state=disabled": __body19,
    // figma: Device=Mobile, Selected=true, State=Pressed, Text=False, Borderless=False
    "device=mobile|borderless=false|selected=true|text=false|state=pressed": __body20,
    // figma: Device=Mobile, Selected=true, State=Focused, Text=False, Borderless=False
    "device=mobile|borderless=false|selected=true|text=false|state=focused": __body20,
    // figma: Device=Mobile, Selected=true, State=Hovered, Text=False, Borderless=False
    "device=mobile|borderless=false|selected=true|text=false|state=hovered": __body21,
    // figma: Device=Mobile, Selected=true, State=Enabled, Text=False, Borderless=False
    "device=mobile|borderless=false|selected=true|text=false|state=enabled": __body22,
    // figma: Device=Mobile, Selected=true, State=Enabled, Text=True, Borderless=True
    "device=mobile|borderless=true|selected=true|text=true|state=enabled": __body23,
    // figma: Device=Desktop, Selected=true, State=Enabled, Text=True, Borderless=True
    "device=desktop|borderless=true|selected=true|text=true|state=enabled": __body24,
    // figma: Device=Mobile, Selected=false, State=Enabled, Text=True, Borderless=True
    "device=mobile|borderless=true|selected=false|text=true|state=enabled": __body25,
    // figma: Device=Desktop, Selected=false, State=Enabled, Text=True, Borderless=True
    "device=desktop|borderless=true|selected=false|text=true|state=enabled": __body26,
    // figma: Device=Mobile, Selected=false, State=Disabled, Text=True, Borderless=True
    "device=mobile|borderless=true|selected=false|text=true|state=disabled": __body27,
    // figma: Device=Desktop, Selected=false, State=Disabled, Text=True, Borderless=True
    "device=desktop|borderless=true|selected=false|text=true|state=disabled": __body28,
    // figma: Device=Mobile, Selected=true, State=Disabled, Text=True, Borderless=True
    "device=mobile|borderless=true|selected=true|text=true|state=disabled": __body29,
    // figma: Device=Desktop, Selected=true, State=Disabled, Text=True, Borderless=True
    "device=desktop|borderless=true|selected=true|text=true|state=disabled": __body30,
  };
  return (__impls[__vkey(props)] ?? __body22)();
}
export default RadioButtons;

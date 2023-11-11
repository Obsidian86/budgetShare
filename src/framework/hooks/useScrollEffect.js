import React from "react";

const processScrollEffectState = (effects) => {
  const scroll = document.documentElement.scrollTop || document.body.scrollTop;
  return Object.keys(effects).reduce((prev, curr) => {
    const { gt, lt } = effects[curr];
    let value = false;
    if (gt) value = scroll > gt;
    if (lt) value = scroll < lt;
    prev[curr] = value;
    return prev;
  }, {});
};

const useScrollEffect = (effects) => {
  const [effectState, setEffectState] = React.useState(
    processScrollEffectState(effects)
  );

  const handleWindowScroll = () =>
    setEffectState(processScrollEffectState(effects));

  React.useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  });

  return effectState;
};

export default useScrollEffect;

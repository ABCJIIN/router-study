import React from "react";
import { useSearchParams } from "react-router-dom";

function About() {
  const [searchParams, setSearchPrams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  const onToggleDetail = () => {
    setSearchPrams({ mode, detail: detail === "true" ? false : true });
  };
  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchPrams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는</p>
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail}>toggle</button>
      <button onClick={onIncreaseMode}>mode + 1 </button>
    </div>
  );
}

export default About;

import React, { useRef, useCallback, useState } from "react";

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  //input 수정을 위한 함수
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: [value],
      });
    },
    [form]
  );
};

export default App;

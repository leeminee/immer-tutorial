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

  //form 등록을 위한 함수
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const info = {
      id: nextId.current,
      name: form.name,
      username: form.username,
    };

    //array에 새 항목 등록
    setData({
      ...data,
      array: data.array.concat(info),
    });
  });
};

export default App;

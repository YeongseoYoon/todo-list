import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  const renderCategoryButtons = () => {
    const categoryButtons = Object.values(Categories).map((categoryValue) => {
      if (category !== categoryValue) {
        return (
          <button key={categoryValue} name={categoryValue} onClick={onClick}>
            {categoryValue}
          </button>
        );
      }
      return null;
    });

    return categoryButtons;
  };
  return (
    <li>
      <span>{text}</span>
      {renderCategoryButtons()}
    </li>
  );
}
export default ToDo;

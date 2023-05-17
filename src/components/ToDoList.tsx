import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [categories, setCategories] = useState<string[]>(
    Object.values(Categories)
  );
  const [category, setCategory] = useRecoilState(categoryState);

  const { register, handleSubmit } = useForm();

  const handleCategoryChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as Categories);
  };

  const handleAddCategory = (data: any) => {
    const newCategory = data.category as Categories;

    if (!categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
    }

    setCategory(newCategory);

    return data;
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <div>
        <form onSubmit={handleSubmit(handleAddCategory)}>
          <input {...register("category")} placeholder="Write your category" />
          <button>Add</button>
        </form>
        <h2>Category</h2>
        <select value={category} onChange={handleCategoryChange}>
          {categories.map((newCategory) => (
            <option key={newCategory} value={newCategory}>
              {newCategory}
            </option>
          ))}
        </select>
        <br />
      </div>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}
export default ToDoList;

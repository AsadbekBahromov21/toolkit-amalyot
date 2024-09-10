import React, { useState } from "react";
import { useEffect } from "react";
import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoryQuery,
  useUpdeteCategoryMutation,
} from "../../redux/api/category-api";
import BasicModal from "../modal/Modal";
// maleImageUrl =
//   "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png";
const Hero = () => {
  const [udeteCategoryItem, setUdeteCategoryItem] = useState(null);
  const { isLoading, data, isSuccess } = useGetCategoryQuery();
  const [createCategory, { data: createData, isLoading: createLoading }] =
    useCreateCategoryMutation();
  const [creteDelete, { data: createDelete, isLoading: deleteLoading }] =
    useDeleteCategoryMutation();
  const [updeteCategory] = useUpdeteCategoryMutation();
  console.log(data);
  const handleCreate = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    createCategory(data)
      .unwrap()
      .then(() => {
        e.target.reset();
      });
  };
  const handlUpdeteCategory = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    updeteCategory({ id: udeteCategoryItem.id, body: data });
  };
  return (
    <>
      <div className="flex  gap-14 container mx-auto bg-[#F0F2F5] pt-10 pb-10 px-3">
        <div className="w-[500px] h-[380px] p-4 border bg-[#fff]">
          <h2 className="text-[22px] text-center font-[600] mb-2 text-[#0866FF]">
            Create!
          </h2>
          <form
            className=" flex flex-col gap-3 "
            onSubmit={handleCreate}
            action=""
          >
            <input
              className="w-full py-1 pl-2 border outline-none"
              name="title"
              type="text"
              placeholder="Title"
            />
            <input
              className="w-full py-1 pl-2 border outline-none"
              name="fname"
              type="text"
              placeholder="fname"
              required
            />
            <input
              className="w-full py-1 pl-2 border outline-none"
              name="lname"
              type="text"
              placeholder="lname"
              required
            />
            <input
              className="w-full py-1 pl-2 border outline-none"
              name="jop"
              type="text"
              placeholder="Jop"
              required
            />
            <select
              className="w-full py-1 pl-2 border outline-none "
              name="gender"
              id=""
            >
              <option className="text-[#9CA3AF]" value="">
                Gender
              </option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            <input
              className="w-full py-1 pl-2 border outline-none"
              name="bio"
              type="text"
              placeholder="Bio"
              required
            />
            <button className="w-[150px] bg-[#00A400] text-[#fff] py-1 rounded-[5px] m-auto">
              {createLoading ? "loading..." : "create"}
            </button>
          </form>
        </div>
        <div className=" w-full gap-4 grid lg:grid-cols-3">
          {isLoading && <h3>Loading...</h3>}
          {data?.map((category) => (
            <div className=" border h-[320px] relative" key={category.id}>
              <div>
                <img
                  className="w-full h-[150px] object-contain  "
                  src={
                    category.gender === "male"
                      ? "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png"
                      : "https://static.vecteezy.com/system/resources/thumbnails/009/379/900/small_2x/woman-face-expression-clipart-design-illustration-free-png.png"
                  }
                  alt=""
                />
              </div>
              <div className="p-3 flex flex-col gap-1">
                <div className="flex justify-between">
                  <p className="text-[16px] font-[500]">{category.lname}</p>
                  <p className="text-[16px] font-[500]">{category.fname}</p>
                </div>
                <p className="text-[15px] text-[#0007]">{category.title}</p>
                <p className="text-[15px] text-[#0007]">{category.jop}</p>
                <p className="text-[15px] text-[#0007]">{category.bio}</p>
                <button
                  className="w-full py-1 bg-red-600 mt-[6px] text-[#fff]"
                  onClick={() => creteDelete(category.id)}
                >
                  delete
                </button>
                <div
                  onClick={() => setUdeteCategoryItem(category)}
                  className="absolute top-[4px]  right-0"
                >
                  <BasicModal>
                    <form
                      onSubmit={handlUpdeteCategory}
                      className="flex flex-col gap-2"
                      action=""
                    >
                      <div className="flex flex-col gap-1">
                        <input
                          required
                          defaultValue={category.title}
                          name="title"
                          className="border outline-none py-1 pl-2"
                          type="text"
                          placeholder="title"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <input
                          required
                          defaultValue={category.fname}
                          name="fname"
                          className="border outline-none py-1 pl-2"
                          type="text"
                          placeholder="fname"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <input
                          required
                          defaultValue={category.lname}
                          name="lname"
                          className="border outline-none py-1 pl-2"
                          type="text"
                          placeholder="lname"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <input
                          required
                          defaultValue={category.jop}
                          name="jop"
                          className="border outline-none py-1 pl-2"
                          type="text"
                          placeholder="jop"
                        />
                      </div>
                      <select
                        defaultValue={category.gender}
                        className="w-full py-1 pl-2 border outline-none "
                        name="gender"
                        id=""
                      >
                        <option className="text-[#9CA3AF]" value="">
                          Gender
                        </option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                      </select>
                      <div className="flex flex-col gap-1">
                        <input
                          defaultValue={category.bio}
                          name="bio"
                          className="border outline-none py-1 pl-2"
                          type="text"
                          placeholder="bio"
                        />
                      </div>
                      <button className="w-ful py-1 bg-blue-700 text-[#fff]">
                        ADD
                      </button>
                    </form>
                  </BasicModal>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;

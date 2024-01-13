import { Tag } from "@/types";
import CreatableReactSelect from "react-select/creatable";
import { v4 as uuidV4 } from "uuid";

const getTags = async () => {
  // 'use server'
  const res = await fetch(`http://localhost:3000/api/tags`, {
    cache: "no-cache",
  });
  const tags = res.json();
  return tags;
};

const AddTagsComp = async ({ setSelectedTags, selectedTags }) => {
  const addTag = async (newTag: Tag) => {
    try {
      const res = await fetch(`http://localhost:3000/api/tags`, {
        method: "POST",
        body: JSON.stringify(newTag),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (res.ok) {
        console.log("successfully created the tag");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const tags: Tag[] = await getTags();
  const options = tags.map((tag) => {
    return { label: tag.label, value: tag.id };
  });
  const value: Tag[] = selectedTags?.map((tag) => {
    return { label: tag.label, value: tag.id };
  });

  return (
    <div className="flex flex-1">
      <CreatableReactSelect
        className={"w-[95%] mx-auto"}
        isMulti
        onCreateOption={(label) => {
          const newTag: Tag = { id: uuidV4(), label };
          addTag(newTag);
          setSelectedTags((prev) => [...prev, newTag]);
        }}
        value={value}
        options={options}
        onChange={(tags) => {
          setSelectedTags(
            tags.map((tag) => {
              return { label: tag.label, id: tag.value };
            }),
          );
        }}
      />
    </div>
  );
};

export default AddTagsComp;

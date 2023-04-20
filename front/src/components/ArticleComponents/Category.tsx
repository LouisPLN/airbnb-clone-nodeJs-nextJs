import ChildrenType from "@/types/ChildrenType";

const CategoryArticle = ({ children }: ChildrenType) => {
  return (
    <div className="w-full flex justify-start items-center mb-6 not-italic">
      <div className="flex items-center text-xs text-white bg-[#bf26d396] border border-primary p-2 rounded-full">
        {children}
      </div>
    </div>
  );
};

export default CategoryArticle;

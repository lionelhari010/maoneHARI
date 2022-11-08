import React from "react";
import { BiLike } from "react-icons/bi";

const CommentCard = (props) => {
  const { eachComment } = props;
  const { name, img_link, comment } = eachComment;
  return (
    <div className="p-1 font-sans">
      <div className="flex">
        <img
          className="mr-2 rounded-full h-16 w-16"
          src={img_link}
          alt={name}
        />
        <div className="flex flex-col">
          <h1 className="text-base font-semibold">{name}</h1>
          <p>{comment}</p>
          <div className=" flex items-center mt-3">
            <BiLike className=" text-2xl mr-2" />
            <span className="text-base font-medium">Reply</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;

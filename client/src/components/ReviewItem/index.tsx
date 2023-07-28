import React from "react";
import ReviewModal from "../../models/ReviewModel";
import Rating from "react-star-picker";
import { dateFormatter } from "../../utils/dateFormatter";


export const ReviewItem: React.FC<{ item: ReviewModal }> = ({ item }) => {
 
const date = dateFormatter(String(item.date),"DD MMMM YYYY")
  return (
    <>
      <div className='w-3/4 bg-gray-300 h-28 rounded-lg p-2 overflow-auto last:mb-4'>
        <div className="flex gap-4">
         <span className="font-bold text-sm">{item.userEmail}</span> 
          <Rating size={20}  disabled onChange={() => {}} value={item.rating} />
          <span className="text-sm font-semibold text-black/70">{date}</span>
        </div>
        <div>
            <p className="font-semibold text-sm ml-5">{item.reviewDescription}</p>
        </div>
      </div>
    </>
  );
};

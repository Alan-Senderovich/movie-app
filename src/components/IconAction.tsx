import { FC } from 'react';
import { AiOutlineUnorderedList, AiFillHeart, AiFillStar } from "react-icons/ai";
import { BiSolidTagAlt } from "react-icons/bi";

interface IconActionProps {
    iconLabel: string;
    iconSize?: number;
}

const IconAction: FC<IconActionProps> = ({ iconLabel, iconSize = 15 }) => {
    return <div className='bg-darkBlue w-[40px] h-[40px] rounded-full flex justify-center items-center'>
        {iconLabel === "list" && <AiOutlineUnorderedList size={iconSize}/>}
        {iconLabel === "heart" && <AiFillHeart size={iconSize}/>}
        {iconLabel === "tag" && <BiSolidTagAlt size={iconSize}/>}
        {iconLabel === "star" && <AiFillStar size={iconSize}/>}


    </div>
}

export default IconAction
import React from "react";
import Button from "../../../../components/Button";
import { getBooksWithSearchParam } from "../../../../services/api";

interface HeaderProps {
  searchParam: string;
  setSearchParam: (value: string) => void;
  setSearchedData: (value: object) => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchParam,
  setSearchParam,
  setSearchedData
}) => {


  const handleSearchInputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchParam(e.target.value);
  };

  const handleSearchButton =  async() => {
const res = await getBooksWithSearchParam(0,10,searchParam.toLowerCase())

console.log(res);

  }
  return (
    <div className='mt-20 flex gap-5'>
      <input
        className='rounded-md h-8 w-72 focus:outline-none px-1.5 border border-black/70 bg-transparent'
        placeholder='Kitap Ara...'
        type='text'
        value={searchParam}
        onChange={(e) => handleSearchInputOnChange(e)}
      />
      <Button as='button' size='small' variant='primary' onClick={handleSearchButton}>
        Ara
      </Button>
    </div>
  );
};

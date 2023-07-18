import React, { useState } from "react";
import Button from "../../../../components/Button";
import { useBreakpoint } from "../../../../hooks/useBreakpoint";
import cs from "classnames";
import { useSearchParams } from "react-router-dom";

export const Header: React.FC = () => {
  const [searhcParams, setSearchParams] = useSearchParams();
  const [searchParam, setSearchParam] = useState<string>(searhcParams.get('filter')|| '');

  const handleSearchInputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchParam(e.target.value);
  };

  const handleSearchButton = async () => {
    if (searchParam) setSearchParams({ filter: searchParam,page:'1' });
    else setSearchParams({page:'1'});
  };
  const { breakpoint } = useBreakpoint();

  return (
    <div className='mt-20 flex gap-5 items-center flex-col lg:items-start lg:flex-row'>
      <input
        className='rounded-md h-8 w-72 focus:outline-none px-1.5 border border-black/70 bg-transparent'
        placeholder='Kitap Ara...'
        type='text'
        value={searchParam}
        onChange={(e) => handleSearchInputOnChange(e)}
      />
      <Button
        as='button'
        size={breakpoint === "desktop" ? "small" : "normal"}
        variant='primary'
        onClick={() => handleSearchButton()}
        className={cs({
          "w-20": breakpoint === "desktop",
          "!w-1/3": breakpoint === "mobile",
        })}
      >
        Ara
      </Button>
    </div>
  );
};

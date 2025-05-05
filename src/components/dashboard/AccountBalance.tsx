
import React from 'react';

export const AccountBalance: React.FC = () => {
  return (
    <section className="bg-[rgba(154,235,191,0.43)] border inline-block items-stretch justify-center p-[30px] rounded-[13px] border-[rgba(81,209,137,1)] border-solid max-md:px-5">
      <div className="flex flex-col">
        <div className="self-stretch gap-1 text-base text-black font-medium">
          Total account balance
        </div>
        <div className="flex items-center gap-[22px] text-[50px] text-black font-bold whitespace-nowrap leading-none mt-1 max-md:text-[40px]">
          <div className="self-stretch gap-3.5 my-auto max-md:text-[40px]">
            150,000
          </div>
        </div>
        <div className="text-[#919191] self-stretch gap-2.5 text-sm font-normal leading-none mt-1">
          Your total balance in USD at May 12th 2025
        </div>
      </div>
    </section>
  );
};

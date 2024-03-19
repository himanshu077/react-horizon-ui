import React from 'react';
import SecondaryButton from '../Button/SecondaryButton';

const KanbanHeader = ({title}) => {
  return (
        <div className="!flex !justify-between !pb-6">
          <p className="Poppins700 !text-[22px] !leading-[32px] !text-[--logo-color]">
          {title}
          </p>
          <SecondaryButton
            size="sm"
            className="!bg-[--text-color] !py-[16px] !px-10 !rounded-[12px] !text-lg !text-[--logo-color]"
            title="+"
          />
        </div>
  );
};

export default KanbanHeader;

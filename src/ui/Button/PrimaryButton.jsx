import React from 'react'
import { Button } from '@/components/ui/button'

const PrimaryButton = ({ title }) => {
  return (
    <Button varient="default" className="!bg-white !rounded-[16px] !text-black !text-center !Poppins500 !text-sm">{title}</Button>
  )
}

export default PrimaryButton

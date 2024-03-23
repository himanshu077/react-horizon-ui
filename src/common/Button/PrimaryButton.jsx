import React from 'react'
import { Button } from '@/components/ui/button'

const PrimaryButton = ({ title }) => {
  return (
    <Button varient="default" className="!bg-[--signin-bg] !rounded-[16px] !text-black hover:!text-[--logo-color] hover:!bg-[--bg-search] !text-center !Poppins500 !text-sm">{title}</Button>
  )
}

export default PrimaryButton

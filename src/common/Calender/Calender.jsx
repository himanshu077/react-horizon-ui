import React, { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";
import { Card } from "@/components/ui/card";

const CalendarComponent = () => {
  const [value, onChange] = useState(new Date());

  return (
    <Card className="!w-full Poppins500 !rounded-[20px] !border-none !shadow-none">
      <Calendar onChange={onChange} value={value} className="!w-full !border-none !rounded-[20px]"  />
    </Card>
  );
};

export default CalendarComponent;
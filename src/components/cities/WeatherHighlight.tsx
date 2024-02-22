import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function WeatherHighlight({ title, children }: Props) {
  return (
    <div className="bg-gray-50 w-25 mb-4 rounded-lg px-4 py-5">
      <p className="text-sm font-medium text-gray-300">{title}</p>
      <div>{children}</div>
    </div>
  );
}

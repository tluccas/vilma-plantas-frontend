import type { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function InputField({ label, ...rest}: Props){

    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <input {...rest} 
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring focus:ring-green-500 focus:border-green-500"
              />
        </div>
    );
}
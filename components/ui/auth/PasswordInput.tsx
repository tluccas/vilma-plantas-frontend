"use client";

import React, { useState } from "react";

interface Props {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    className?: string;
}

export default function PasswordInput({ label, value, onChange, placeholder, className }: Props) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col gap-1">
            <label className="text-lg font-medium text-gray-700">{label}</label>

            <div className="relative">
                <input type={showPassword ? "text" : "password"} 
                value = {value}
                onChange={onChange}
                placeholder={placeholder ? placeholder : ""}
                className={`w-full h-10 border border-gray-300 rounded-md pl-3 pr-10! text-sm outline-none focus:ring focus:ring-green-500 focus:border-green-500 ${className ? className : ""}`}
                
                />

                <button
                type = "button"
                className = "absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <i className="bi bi-eye-fill"></i> : <i className="bi bi-eye-slash-fill"></i>}
                </button>

                
            </div>
        </div>
    );
}
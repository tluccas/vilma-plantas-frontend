import React, { useState } from "react";

interface Props {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PasswordInput({ label, value, onChange }: Props) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">{label}</label>

            <div className="relative">
                <input type={showPassword ? "text" : "password"} 
                value = {value}
                onChange={onChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring focus:ring-green-500 focus:border-green-500" 
                />

                <button
                type = "button"
                className = "absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? "Ocultar" : "Mostrar"}
                </button>
            </div>
        </div>
    );
}
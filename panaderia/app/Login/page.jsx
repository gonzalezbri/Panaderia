"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const router = useRouter();

const handleSubmit = async (e) => {
e.preventDefault();

try {
    const res = await signIn("credentials", {
    email,
    password,
    redirect: false,
    });

    if (res.error) {
    setError("Invalid Credentials");
    return;
    }

    router.replace("/dashboard");
} catch (error) {
    console.log(error);
}
};

return (
<div className="min-h-screen flex items-center justify-center ">
    <div className="w-full max-w-xl space-y-8 rounded-lg bg-gray-300 p-6 shadow sm:p-8">
    <h2 className="text-2xl underline font-bold mb-6 text-center">Admin Account Login</h2>
    <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-4">
        <label htmlFor="email" className="block text-xl text-gray-700 font-bold mb-2">
            Admin Email
        </label>
        <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        </div>
        <div className="mb-6">
        <label htmlFor="password" className="block text-xl text-gray-700 font-bold mb-2">
            Password
        </label>
        <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
        {error && (
            <div className="text-red-600 text-sm">{error}</div>
        )}
        </div>
        <button
        type="submit"
        className="bg-orange-400 hover:bg-pink-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
    </form>
    </div>
</div>
);
}

"use client";

import { useState } from "react";
import { signIn } from "@/auth";
import { signInWithDiscord } from "./signInWithDiscord";
import Footer from "../Footer/Footer";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {};

    return (
        <div>
            <main className="flex justify-center items-center min-h-screen">
                <fieldset className="bg-base-300 border-base-300 rounded-box w-full max-w-md p-6 border">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-center">Welcome to Dungeon Dex</h2>
                        <h3 className="text-lg"></h3>

                        <label className="input input-bordered flex items-center gap-2 rounded-lg w-full">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>
                            <input
                                type="email"
                                placeholder="mail@site.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="grow"
                            />
                        </label>

                        <label className="input input-bordered flex items-center gap-2 rounded-lg w-full">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                    <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                </g>
                            </svg>
                            <input
                                type="password"
                                required
                                placeholder="Password"
                                minLength={8}
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must include uppercase, lowercase, and a number"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="grow"
                            />
                        </label>
                        {error && (
                            <p className="text-red-500 text-sm text-center">
                                {error}
                            </p>
                        )}
                        <button type="submit" className="btn btn-primary w-full">
                            Log in
                        </button>

                        <div className="divider">OR</div>

                        <form action={signInWithDiscord} className="w-full">
                            <button type="submit" className="btn w-full bg-white text-black border-[#e5e5e5]">
                                <img
                                    src="/Discord-Symbol-Black.svg"
                                    alt="Discord Icon"
                                    className="h-6 w-6 mr-2"
                                />
                                Continue with Discord
                            </button>
                        </form>
                    </div>
                </fieldset>
            </main>
            <Footer />
        </div>
    );
}

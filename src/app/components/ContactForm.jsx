"use client";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

export default function ContactForm() {
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // ❌ page reload stop

        if (!checked) {
            setError("Please accept terms and conditions");
            return;
        }

        setError("");
        alert("Form submitted successfully ✅");
    };

    return (
        <section
            id="contact"
            className="w-full bg-white py-20 lg:py-28"
        >
            <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT IMAGE */}
                    <div className="w-full flex justify-center">
                        <div className="relative w-full max-w-[420px] aspect-[420/520]">
                            <Image
                                src="/formimage.svg"
                                alt="Contact illustration"
                                fill
                                priority
                                className="object-contain rounded-[12px]"
                            />
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <form
                        className="w-full max-w-[640px]"
                        onSubmit={handleSubmit}
                    >

                        {/* Row 1 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-8 text-black">
                            <Input label="First Name" placeholder="Franklin" />
                            <Input label="Last Name" placeholder="Smith" />
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-8 text-black">
                            <Input label="Email" placeholder="Franklinsmith@gmail.com" />

                            {/* Phone */}
                            <div className="relative phone-field">
                                <label className="block text-[13px] font-semibold text-[#4D4D4D] mb-2">
                                    Phone Number
                                </label>

                                <PhoneInput
                                    country="us"
                                    enableSearch
                                    placeholder="+1 012 3456 789"
                                    inputStyle={{
                                        width: "100%",
                                        border: "none",
                                        borderBottom: "1px solid rgba(0,0,0,0.2)",
                                        borderRadius: "0",
                                        fontSize: "14px",
                                        paddingLeft: "56px",
                                        background: "transparent",
                                        color: "#000",
                                    }}
                                    buttonStyle={{
                                        border: "none",
                                        background: "transparent",
                                        paddingLeft: "4px",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Country */}
                        <div className="mb-8 text-black">
                            <Input label="Country" placeholder="Canada" full />
                        </div>

                        {/* Opinion */}
                        <div className="mb-10 text-black">
                            <Input
                                label="Share your Opinion"
                                placeholder="I think this need to be change a litle bit..."
                                full
                            />
                        </div>

                        {/* Checkbox */}
                        <div className="mb-6">
                            <label
                                className="flex items-center gap-3 cursor-pointer"
                                onClick={() => {
                                    setChecked(!checked);
                                    setError("");
                                }}
                            >
                                <div
                                    className={`relative w-[18px] h-[18px] border rounded flex items-center justify-center ${checked ? "border-[#FE5800]" : "border-black/30"
                                        }`}
                                >
                                    {checked && (
                                        <Image
                                            src="/formcheckicon.svg"
                                            alt="check"
                                            fill
                                            className="object-contain"
                                        />
                                    )}
                                </div>

                                <p className="text-[14px] text-black/70">
                                    I agree, to terms and conditions
                                </p>
                            </label>

                            {error && (
                                <p className="text-red-500 text-[12px] mt-2">
                                    {error}
                                </p>
                            )}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="
                cursor-pointer
                rounded-full
                bg-[#FE5800]
                px-10
                py-3
                text-[14px]
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-[#ff6a1a]
                hover:opacity-90
              "
                        >
                            Submit
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
}

/* INPUT COMPONENT */
function Input({ label, placeholder = "", full = false }) {
    return (
        <div className={full ? "w-full" : ""}>
            <label className="block text-[13px] font-semibold text-[#4D4D4D] mb-2">
                {label}
            </label>
            <input
                placeholder={placeholder}
                className="
          w-full
          border-b
          border-black/20
          py-2
          text-[14px]
          outline-none
          focus:border-black
        "
            />
        </div>
    );
}

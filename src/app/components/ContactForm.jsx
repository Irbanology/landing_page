"use client";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useEffect, useMemo, useState } from "react";
import Select, { components } from "react-select";
import ReactCountryFlag from "react-country-flag";
import countryList from "react-select-country-list";
import toast from "react-hot-toast";
import Container from "@/app/components/Container";

export default function ContactForm() {
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("US");
    const [phoneValue, setPhoneValue] = useState("");
    const [phoneCountry, setPhoneCountry] = useState("US");
    const [countrySyncError, setCountrySyncError] = useState("");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const countryOptions = useMemo(() => countryList().getData(), []);
    const selectedCountryOption = countryOptions.find(
        (option) => option.value === selectedCountry
    );

    const Option = (props) => (
        <components.Option {...props}>
            <div className="flex items-center gap-2">
                <ReactCountryFlag countryCode={props.data.value} svg style={{ width: "1em", height: "1em" }} />
                <span>{props.data.label}</span>
            </div>
        </components.Option>
    );

    const SingleValue = (props) => (
        <components.SingleValue {...props}>
            <div className="flex items-center gap-2">
                <ReactCountryFlag countryCode={props.data.value} svg style={{ width: "1em", height: "1em" }} />
                <span>{props.data.label}</span>
            </div>
        </components.SingleValue>
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const firstName = form.firstName.value.trim();
        const lastName = form.lastName.value.trim();
        const email = form.email.value.trim();
        const country = selectedCountryOption?.label?.trim() || "";
        const phone = phoneValue.trim();
        const opinion = form.opinion.value.trim();

        // ❌ Validation
        if (!firstName || !lastName || !email || !country || !phone || !opinion) {
            toast.error("Please fill all required fields");
            return;
        }

        if (phoneCountry && phoneCountry !== selectedCountry) {
            setCountrySyncError("Phone country and selected country must match");
            toast.error("Phone country and selected country must match");
            return;
        }

        if (!checked) {
            setError("Please accept terms & conditions");
            toast.error("You must accept terms & conditions");
            return;
        }

        setError("");
        setCountrySyncError("");

        // ✅ Success
        toast.success("Form submitted successfully.");

        // optional reset
        form.reset();
        setChecked(false);
        setPhoneValue("");
        setSelectedCountry("US");
        setPhoneCountry("US");
    };

    return (
        <section
            id="contact"
            className="w-full bg-white py-20 lg:py-28"
        >

            <h1 className="text-center font-bold text-black text-[32px] sm:text-[42px] md:text-[56px] lg:text-[68px] tracking-tight leading-[1.1] mb-10">
                Contact Us
            </h1>

            <Container>
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
                            <Input label="First Name" placeholder="Franklin" id="firstName" />
                            <Input label="Last Name" placeholder="Smith" id="lastName" />
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-8 text-black">
                            <Input label="Email" placeholder="Franklinsmith@gmail.com" id="email" />

                            {/* Phone */}
                            <div className="relative phone-field">
                                <label htmlFor="phone" className="block text-[13px] font-semibold text-[#4D4D4D] mb-2">
                                    Phone Number
                                </label>

                                {isMounted ? (
                                    <PhoneInput
                                        id="phone"
                                        country={selectedCountry.toLowerCase()}
                                        value={phoneValue}
                                        onChange={(value, countryData) => {
                                            setPhoneValue(value);
                                            if (countryData?.countryCode) {
                                                const normalizedCountry = countryData.countryCode.toUpperCase();
                                                setPhoneCountry(normalizedCountry);
                                                setSelectedCountry(normalizedCountry);
                                            }
                                            setCountrySyncError("");
                                        }}
                                        enableSearch
                                        placeholder="+1 012 3456 789"
                                        aria-label="Phone Number"
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
                                        dropdownStyle={{
                                            borderRadius: "10px",
                                            border: "1px solid rgba(0,0,0,0.1)",
                                            boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
                                        }}
                                    />
                                ) : (
                                    <input
                                        id="phone"
                                        aria-label="Phone Number"
                                        placeholder="+1 012 3456 789"
                                        className="w-full border-b border-black/20 py-2 text-[14px] outline-none"
                                        readOnly
                                    />
                                )}
                            </div>
                        </div>

                        {/* Country */}
                        <div className="mb-8 text-black">
                            <label htmlFor="country" className="block text-[13px] font-semibold text-[#4D4D4D] mb-2">
                                Country
                            </label>
                            {isMounted ? (
                                <Select
                                    instanceId="contact-country-select"
                                    inputId="country"
                                    options={countryOptions}
                                    value={selectedCountryOption || null}
                                    onChange={(option) => {
                                        if (!option) return;
                                        setSelectedCountry(option.value);
                                        setPhoneCountry(option.value);
                                        setCountrySyncError("");
                                    }}
                                    isSearchable
                                    components={{ Option, SingleValue }}
                                    className="text-[14px]"
                                    classNamePrefix="country-select"
                                    styles={{
                                        control: (base) => ({
                                            ...base,
                                            border: "none",
                                            borderBottom: "1px solid rgba(0,0,0,0.2)",
                                            borderRadius: 0,
                                            boxShadow: "none",
                                            minHeight: 40,
                                            background: "transparent",
                                        }),
                                        valueContainer: (base) => ({ ...base, padding: "0 0 6px 0" }),
                                        indicatorSeparator: () => ({ display: "none" }),
                                        menu: (base) => ({
                                            ...base,
                                            borderRadius: 10,
                                            overflow: "hidden",
                                            boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
                                        }),
                                        menuList: (base) => ({
                                            ...base,
                                            maxHeight: 220,
                                            paddingTop: 4,
                                            paddingBottom: 4,
                                        }),
                                        option: (base, state) => ({
                                            ...base,
                                            backgroundColor: state.isSelected
                                                ? "rgba(254,88,0,0.12)"
                                                : state.isFocused
                                                    ? "rgba(0,0,0,0.05)"
                                                    : "white",
                                            color: "#111827",
                                            cursor: "pointer",
                                        }),
                                    }}
                                />
                            ) : (
                                <input
                                    id="country"
                                    value={selectedCountryOption?.label || ""}
                                    className="w-full border-b border-black/20 py-2 text-[14px] outline-none"
                                    readOnly
                                />
                            )}
                            {countrySyncError && (
                                <p className="text-red-500 text-[12px] mt-2">
                                    {countrySyncError}
                                </p>
                            )}
                        </div>

                        {/* Opinion */}
                        <div className="mb-10 text-black">
                            <Input
                                label="Share your Opinion"
                                placeholder="I think this need to be change a litle bit..."
                                full
                                id="opinion"
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
                                    className={`relative w-[18px] h-[18px] border rounded-full flex items-center justify-center ${checked ? "border-[#FE5800]" : "border-black/30"
                                        }`}
                                >
                                    {checked && (
                                        <Image
                                            src="/formcheckicon.svg"
                                            alt="check"
                                            fill
                                            className="cover"
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
            </Container>
        </section>
    );
}

/* INPUT COMPONENT */
function Input({ label, placeholder = "", full = false, id }) {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
    return (
        <div className={full ? "w-full" : ""}>
            <label htmlFor={inputId} className="block text-[13px] font-semibold text-[#4D4D4D] mb-2">
                {label}
            </label>
            <input
                id={inputId}
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
import Image from "next/image";

export default function ContactForm() {
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
                    <form className="w-full max-w-[640px]">

                        {/* Row 1 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-8 text-black">
                            <Input label="First Name" placeholder="Franklin" />
                            <Input label="Last Name" placeholder="Smith"/>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-8 text-black">
                            <Input label="Email" placeholder="Franklinsmith@gmail.com" />
                            <Input label="Phone Number" placeholder="+1 012 3456 789" />
                        </div>

                        {/* Country */}
                        <div className="mb-8 text-black">
                            <Input label="Country" placeholder="Canada" full />
                        </div>

                        {/* Requirement */}
                        <div className="mb-10 text-black">
                            <Input label="Share your Opinion" placeholder="I think this need to be change a litle bit..." full />
                        </div>

                        {/* Checkbox */}
                        <div className="flex items-center gap-3 mb-12 text-black">
                            <div className="relative w-[18px] h-[18px]">
                                <Image
                                    src="/formcheckicon.svg"
                                    alt="check"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-[14px] text-black/70">
                                I agree, to terms and conditions
                            </p>
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

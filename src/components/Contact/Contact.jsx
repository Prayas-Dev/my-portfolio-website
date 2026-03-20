import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';
import SectionHeader from "../SectionHeader/SectionHeader";

const Contact = () => {

    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_9vn712q',
                'template_p3i4fv6',
                form.current,
                '-290b_mK7eHCRw5ch'
            )
            .then(
                () => {
                    setIsSent(true);
                    form.current.reset();
                    toast.success("Message sent successfully! ✅", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: 'dark',
                    });
                },
                (error) => {
                    console.error("FAILED...", error); // Good to log the actual error
                    toast.error("Failed to send Message. Please try again.", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            )
    }

    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[14vw] relative"
        >

            <ToastContainer />

            <SectionHeader
                title="CONTACT"
                subtitle="I'd love to hear from you - reach out for any opportunities or questions!!"
            />

            <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white text-center">Connect With Me</h3>

                <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
                    <input type="email" name='user_email' placeholder='Your Email' required
                        className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
                    />
                    <input type="text" name='user_name' placeholder='Your Name' required
                        className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
                    />
                    <input type="text" name='subject' placeholder='Subject' required
                        className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
                    />
                    <textarea name="message" placeholder="Message" rows="4"
                        className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
                    ></textarea>

                    <button type='submit'
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md opacity-90 transition cursor-pointer"
                    >SEND</button>
                </form>
            </div>

        </section>
    )
}

export default Contact
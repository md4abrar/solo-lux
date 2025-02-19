'use client'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement form submission logic here (e.g., send the data to an API or email)
        console.log({ name, email, message });
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-start px-6 md:px-16 lg:px-32 pt-12">
                <div className="flex flex-col items-end">
                    <p className="text-2xl font-medium">Contact Us</p>
                    <div className="w-16 h-0.5 bg-orange-600 rounded-full"></div>
                </div>
                
                <form onSubmit={handleSubmit} className="w-full mt-12 space-y-6">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-lg">Name</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border p-3 rounded-md"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border p-3 rounded-md"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-lg">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="border p-3 rounded-md"
                            required
                        />
                    </div>

                    <button type="submit" className="px-12 py-2.5 border rounded text-gray-500/70 hover:bg-slate-50/90 transition">
                        Submit
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;

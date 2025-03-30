'use client'
import React, { useState, useRef } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

interface FormStatus {
    success: boolean;
    message: string;
    loading: boolean;
}

export const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<FormStatus>({
        success: false,
        message: '',
        loading: false
    });
    const [captchaToken, setCaptchaToken] = useState<string>('');
    const captchaRef = useRef<HCaptcha>(null);

    const handleVerificationSuccess = (token: string) => {
        setCaptchaToken(token);
    };

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!captchaToken) {
            setStatus({
                success: false,
                message: 'Please complete the captcha verification',
                loading: false
            });
            return;
        }

        setStatus({ success: false, message: '', loading: true });

        const formElement = event.target as HTMLFormElement;
        const formData = new FormData(formElement);

        formData.append("access_key", "6581ad61-8613-4c2a-b8cf-08265caca1cb");
        formData.append("h-captcha-response", captchaToken);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const result = await response.json();

            if (result.success) {
                setStatus({
                    success: true,
                    message: 'Message sent successfully!',
                    loading: false
                });
                formElement.reset();
                captchaRef.current?.resetCaptcha();
                setCaptchaToken('');
            } else {
                setStatus({
                    success: false,
                    message: result.message || 'Something went wrong. Please try again.',
                    loading: false
                });
            }
    }

    return (
        <div className="lg:w-1/2 md:w-auto sm:w-auto mx-auto px-6 rounded-lg shadow-xl">
            {status.message && (
                <div className={`mb-4 p-3 rounded ${status.success ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'}`}>
                    {status.message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full capitalize px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        placeholder="Your name"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        placeholder="your.email@example.com"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full capitalize px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white resize-none"
                        placeholder="Write your message here..."
                    />
                </div>

                <div className="pt-2 flex justify-center items-center">
                    <HCaptcha
                        sitekey="a09cdfc8-cfe4-4a9e-8b74-56069232698e"
                        onVerify={handleVerificationSuccess}
                        ref={captchaRef}
                        theme="dark"
                    />
                </div>

                <div className="flex justify-center items-center">
                    <button
                        type="submit"
                        disabled={status.loading || !captchaToken}
                        className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-70"
                    >
                        {status.loading ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            </form>
        </div>
    );
};
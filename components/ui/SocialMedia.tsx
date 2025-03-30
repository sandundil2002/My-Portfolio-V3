'use client';
import Image from 'next/image';

export const SocialMedia = () => {
    return (
        <div className="socialContainer mt-2" id="social-container">
            <a
                href="https://www.linkedin.com/in/sandun-dilshan-a640b7272"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src="/gif/Linkedin.gif"
                    alt="LinkedIn profile of Sandun Dilshan"
                    width={50}
                    height={50}
                    unoptimized
                />
            </a>

            <a
                href="https://github.com/sandundil2002"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src="/gif/Github.gif"
                    alt="GitHub profile of Sandun Dilshan"
                    width={50}
                    height={50}
                    unoptimized
                />
            </a>

            <a href="mailto:sandundil2002@gmail.com">
                <Image
                    src="/gif/mail.gif"
                    alt="Email Sandun Dilshan"
                    width={50}
                    height={50}
                    unoptimized
                />
            </a>

            <a
                href="https://twitter.com/sandundil2002"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src="/gif/Twitter.gif"
                    alt="Twitter profile of Sandun Dilshan"
                    width={50}
                    height={50}
                    unoptimized
                />
            </a>

            <a
                href="https://msng.link/o?+94762357995=tg"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src="/gif/Telegram.gif"
                    alt="Telegram contact for Sandun Dilshan"
                    width={50}
                    height={50}
                    unoptimized
                />
            </a>

            <a
                href="https://www.facebook.com/sandun.dilshan.10048?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src="/gif/Facebook.gif"
                    alt="Facebook profile of Sandun Dilshan"
                    width={50}
                    height={50}
                    unoptimized
                />
            </a>

            <a
                href="https://wa.link/dg90zs"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src="/gif/Whatsapp.gif"
                    alt="WhatsApp contact for Sandun Dilshan"
                    width={50}
                    height={50}
                    unoptimized
                />
            </a>
        </div>
    );
};
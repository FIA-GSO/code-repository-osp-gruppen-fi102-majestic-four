import Image from "next/image";

export default function Home() {
    return (
        <div className="flex h-[calc(100vh-64px)] bg-base-100 text-base-content flex-col items-center justify-center p-4 px-24 relative">
            <div className=" bg-base-200 rounded-2xl p-10 py-16 flex flex-col gap-14 shadow-xl">
                <div className="divider divider-secondary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-72 h-72 fill-success"
                    >
                        {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                </div>
                <p className=" text-2xl font-medium">
                    Sie wurden erfolgreich ausgeloggt.
                </p>
            </div>
        </div>
    );
}

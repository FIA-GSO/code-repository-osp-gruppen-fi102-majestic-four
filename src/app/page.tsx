import Image from "next/image";

export default function Home() {
    return (
      <div className="relative top-1/4 sm:top-1/3 md:top-1/2 lg:top-1/2 xl:top-1/2 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto text-center font-source-sans-pro">
      <div className="bg-red-500 p-8 rounded-t-lg">
        <h3 className="text-white text-lg font-light uppercase mt-2">Log out</h3>
      </div>
      <div className="bg-white p-8 rounded-b-lg border-t border-gray-300">
        <p className="text-gray-700 mb-4">
          Congratulations, your account has been successfully log out.
        </p>
        <a
          href="/home"
          className="block text-white bg-red-500 rounded-full py-2 px-6 mx-auto hover:shadow-md transition duration-300"
        >
          Continue
        </a>
      </div>
    </div>
  );
  
}


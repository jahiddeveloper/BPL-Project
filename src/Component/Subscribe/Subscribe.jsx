import React from "react";

const Subscribe = () => {
  return (
    <div className="mt-10 container mx-auto bg-[url('./assets/bg-shadow.png')] bg-cover bg-center py-22 rounded-3xl">
      <h1 className="text-center text-3xl font-bold">
        Subscribe to our Newsletter
      </h1>
      <h3 className="mt-4 text-xl font-semibold text-center">
        Get the latest updates and news right in your inbox!
      </h3>

      <div className="flex justify-center">
        <div className="flex items-center gap-4 mt-6">
          <input className="w-70 md:w-125 pl-1 md:pl-3 py-2 md:py-3 rounded-lg md:rounded-xl border-1 border-gray-400 outline-0" type="email" placeholder="enter your email" />
          <button className="py-2 md:py-3 rounded-lg px-4 md:px-6 md:rounded-xl bg-gradient-to-l from-yellow-400 to-red-400 cursor-pointer font-bold">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

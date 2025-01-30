"use client";

import { trackEvent } from "../../utils/analytics";

export default function Hero() {
  const handleClick = () => {
    trackEvent("Interação", "Clique no botão");
    console.log("Botão clicado!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Next.js Analytics POC
        </h1>
        <p className="text-xl text-gray-600 mb-6 text-center">
          Esta página está sendo rastreada pelo Google Analytics.
        </p>
        <button
          onClick={handleClick}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Clique Aqui!
        </button>
        <p className="mt-4 text-sm text-gray-500 text-center">
          Os cliques neste botão estão sendo rastreados no GA.
        </p>
      </div>
    </div>
  );
}

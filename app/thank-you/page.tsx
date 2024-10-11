"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ThankYou() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="bg-white rounded-lg p-8 shadow-lg max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-600 mb-6">
          Your responses have been recorded. We appreciate your time and effort!
        </p>
        <Button
          onClick={() => router.push("/")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          Go to Homepage
        </Button>
      </div>
    </div>
  );
}

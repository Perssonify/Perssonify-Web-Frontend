"use client";

import CardOne from "./_one";
import CardTwo from "./_two";
import CardThree from "./_three";

export default function Home() {
  return (
    <div className="w-full px-4 max-w-6xl mx-auto mt-20">
      <h2 className="text-2xl font-bold text-center mb-6">Card One</h2>
      <CardOne />
      <h2 className="text-2xl font-bold text-center my-6">Card Two</h2>
      <CardTwo />
      <h2 className="text-2xl font-bold text-center my-6">Card Three</h2>
      <CardThree />
    </div>
  );
}

"use client";

import CardOne from "./_one";
import CardTwo from "./_two";
import CardThree from "./_three";
import CardFour from "./_four";
import StaticOne from "./_staticOne";
import CardFive from "./_five";
import CardSeven from "./_seven";
import StaticTwo from "./_staticTwo";
import CardEight from "./_eight";
import CardNine from "./_nine";
import StaticThree from "./_staticThree";

export default function Home() {
  return (
    <div className="w-full px-4 max-w-6xl mx-auto my-20">
      <h1 className="text-3xl font-bold text-center mb-12">
        Interactive Cards
      </h1>
      <h2 className="text-2xl font-bold text-center mb-12">Card One</h2>
      <CardOne />
      <h2 className="text-2xl font-bold text-center my-12">Card Two</h2>
      <CardTwo />
      <h2 className="text-2xl font-bold text-center my-12">Card Three</h2>
      <CardThree />
      <h2 className="text-2xl font-bold text-center my-12">Card Four</h2>
      <CardFour />
      <h2 className="text-2xl font-bold text-center my-12">Card Five</h2>
      <CardFive />

      <h2 className="text-2xl font-bold text-center my-12">Card Seven</h2>
      <CardSeven />
      <h2 className="text-2xl font-bold text-center my-12">Card Eight</h2>
      <CardEight />
      <h2 className="text-2xl font-bold text-center my-12">Card Nine</h2>
      <CardNine />
      <h1 className="text-3xl font-bold text-center my-12">
        Non Interactive Cards
      </h1>
      <h2 className="text-2xl font-bold text-center my-12">Card One</h2>
      <StaticOne />
      <h2 className="text-2xl font-bold text-center my-12">Card Two</h2>
      <StaticTwo />
      <h2 className="text-2xl font-bold text-center my-12">Card Three</h2>
      <StaticThree />
    </div>
  );
}

import HeroOne from "./_one";
import HeroTwo from "./_two";

export default function Home() {
  return (
    <div className="w-full px-4 max-w-6xl mx-auto mt-20">
      <h2 className="text-2xl font-bold text-center">Hero One</h2>
      <hr className="mt-6" />
      <HeroOne />
      <hr className="mb-6" />
      <h2 className="text-2xl font-bold text-center">Hero Two</h2>
      <hr className="mt-6" />
      <HeroTwo />
      <hr className="mb-6" />
    </div>
  );
}

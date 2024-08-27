import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
  
  <section className="bg-white">
    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
      <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
        <img
          alt=""
          src="https://img.freepik.com/free-photo/3d-rendering-kid-playing-digital-game_23-2150898498.jpg?t=st=1723484263~exp=1723487863~hmac=e99ca116825adbd53fd911aa82d5804dd6d25c9ec1ca691b2cfac96518848978&w=740"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </aside>
  
      <main
        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
      >
        <div className="max-w-xl lg:max-w-3xl">
          <a className="block text-blue-600" href="#">
            <span className="sr-only">Home</span>
          </a>
  
         <SignIn/>
        </div>
      </main>
    </div>
  </section>
  );
}
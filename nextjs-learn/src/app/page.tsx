import Image from "next/image";

export default function Home() {
  return (
     <div className="flex flex-col items-center justify-center min-h-screen pb-5 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
              <div className="text-center">
                   <h1 className="text-4xl font-bold">Welcome to contact Manager</h1>
                   <p className="mt-2 text-lg text-gray-600">
                      Manage your contacts easily and effectively
                   </p>
                   <Image
                    src={"/contacts.png"}
                    height={300}
                    width={300}
                    alt="contact Manager"
                    className="rounded-lg shadow-lg mx-auto"
                   />
              </div>
              <div className="text-center">
                   <p className="mt-2 text-lg text-gray-600">
                      Start manage your contacts today! 
                   </p>
              </div>
     </div>
  );
}

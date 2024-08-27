"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

     
  return (
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 xl:space-x-20 w-full mx-auto my-20">
      
    <div className="max-w-2xl mx-auto text-left py-10 hidden xl:block">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">Ya conociste Dotu</h2>
    <p className="text-3xl font-bold text-gray-800 mb-8">¡Que esperas para potenciar al máximo tu negocio!</p>
    <p className="text-gray-600 mb-6">
        Contáctanos hoy mismo, te ayudaremos a resolver tus dudas y con una breve reunión te mostraremos cómo puedes 
        impulsar el crecimiento de tu negocio en línea con nuestra herramienta.
    </p>
    <hr className="border-gray-300 mb-6" />
    <p className="text-gray-600 mb-6">Horario de atención: 09:00 - 19:00 hora Chile</p>
    <div className="flex justify-start space-x-4 mb-4">
        <button className="bg-purple-700 text-white py-2 px-4 rounded">Agendar demo</button>
        <button className="bg-purple-700 text-white py-2 px-4 rounded">contacto@dotu.cl</button>
    </div>
    <div className="flex justify-start space-x-2 items-center text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M20 12c0-4.418-3.582-8-8-8S4 7.582 4 12s3.582 8 8 8 8-3.582 8-8zm-7.525-2.472a1 1 0 00-1.55-.832l-2 1.5a1 1 0 000 1.664l2 1.5a1 1 0 001.55-.832V10.33zM10 15h4a1 1 0 010 2h-4a1 1 0 010-2z" clipRule="evenodd" />
        </svg>
        <span className="font-semibold">+56 9 7857 2655</span>
    </div>
    </div>
    <div className=" flex-1 rounded-none md:rounded-2xl p-4 md:p-8 shadow-lg bg-white dark:bg-black">
  <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
    Welcome to Aceternity
  </h2>
  <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
    Login to aceternity if you can because we don&apos;t have a login flow yet
  </p>

  <form className="my-8" onSubmit={handleSubmit}>
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
      <LabelInputContainer>
        <Label htmlFor="firstname">Nombre</Label>
        <Input id="firstname" placeholder="" type="text" />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="lastname">Nombre Empresa</Label>
        <Input id="lastname" placeholder="" type="text" />
      </LabelInputContainer>
    </div>

    <LabelInputContainer className="mb-4">
      <Label htmlFor="email">Correo</Label>
      <Input id="email" placeholder="" type="email" />
    </LabelInputContainer>

    <LabelInputContainer className="mb-4">
      <Label htmlFor="password">Número Telefonico</Label>
      <Input id="password" placeholder="" type="password" />
    </LabelInputContainer>

    <LabelInputContainer className="mb-8">
      <Label htmlFor="comentario">Comentarios</Label>
      <Input id="twitterpassword" placeholder="" type="text" />
    </LabelInputContainer>

    <button
      className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
      type="submit"
    >
      Enviar &rarr;
      <BottomGradient />
    </button>
  </form>
</div>



    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

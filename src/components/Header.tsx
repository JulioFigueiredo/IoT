import React from "react";
import Image from "next/image";

interface HeaderProps {
  title: string;
  username?: string;
}

export default function Header({ title, username }: HeaderProps) {
  return (
    <header className="w-full bg-gray-800 p-4 text-2xl text-white flex justify-between items-center">
      {/* Título à esquerda */}
      <div className="header-left">
        {title}
      </div>

      {/* Usuário e imagem à direita */}
      <div className="flex items-center space-x-4">
        {username && (
          <>
            <span className="username">{username}</span>
            <Image
              src="/images/perfil.png"
              alt="User profile"
              width={80}
              height={0}
              className="rounded-full"
            />
          </>
        )}
      </div>
    </header>
  );
}

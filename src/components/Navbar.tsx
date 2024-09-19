'use client'
import Link from "next/link"; 
import React from "react";
import '../styles/styles.css';
import { usePathname } from "next/navigation"

export default function Sidebar() {

  const pathname = usePathname();

    return (
      
      <nav className="navbar">
    <div className="navbar-top">
        <Link href="/" className={`navlink ${pathname === '/'?'active':''} `}>
        <i className="pi pi-home pr-4"></i>Home</Link>
        <Link href={'/users'} className={`navlink ${pathname === '/users'?'active':''} `}>
        <i className="pi pi-user pr-4"></i>Usuários</Link>
        <Link href={'/sensors'} className={`navlink ${pathname === '/sensors'?'active':''} `}>
        <i className="pi pi-bolt pr-4"></i>Sensores</Link>
        <Link href={'/reports'} className={`navlink ${pathname === '/reports'?'active':''} `}> 
        <i className="pi pi-receipt pr-4"></i>Relatórios</Link>
        </div>

    <div className="navbar-bottom">
      <hr />
    <Link href={'/logout'} className= "navlink">
    <i className="pi pi-sign-out pr-4"></i>Logout</Link>
        </div>
      </nav>
  );
}
/* mb = margin-bottom
   mr = margin-right
   p  = padding
*/


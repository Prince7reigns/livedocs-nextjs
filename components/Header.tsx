import Image from "next/image";
import Link from "next/link";
 import React from "react";


 const Header = ({Children}:HeaderProps) =>{
    return (
        <div className="header">
          <Link href="/" className="md:flex-1">
          <Image 
             src="/assets/icons/logo.svg" 
             width={120} 
             height={32}  
             alt="Logo with name" 
             className="hidden md:block"
            />

           <Image 
             src="/assets/icons/logo-icon.svg" 
             width={32} 
             height={32}  
             alt="Logo" 
             className="mr-2 md:hidden"
            />
          </Link>
          {Children}
        </div>
    );
}

export default Header
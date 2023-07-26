"use client";

import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

const Nav = () => {
  const isUserLoggedIn = true;

  return (
    <nav className='flex-between w-full mb-16 scroll-pt-3.5'>
      <Link href='/' className='flx gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          className='object-contain'
          width={30}
          height={30}
          alt='promptopia'
        />
        <p className='logo_text'>Promptopia</p>
      </Link>

      {/* Desktop navigation */}
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Create Post
            </Link>

            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>

            <Link href='/profle'>
              <Image
                src='/assets/images/logo.svg'
                width={37}
                height={37}
                alt='profile'
                className='rounded-full'></Image>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;

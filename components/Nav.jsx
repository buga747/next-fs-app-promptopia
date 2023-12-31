"use client";

import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      console.log(response);
      setProviders(response);
    };

    setUpProviders();
  }, []);

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
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Create Post
            </Link>

            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>

            <Link href='/profile'>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                alt='profile'
                className='rounded-full'
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'>
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile navigation */}
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            {" "}
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              alt='profile'
              className='rounded-full'
              onClick={() => {
                setToggleDropdown(!toggleDropdown);
              }}
            />
            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}>
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}>
                  Create Prompt
                </Link>
                <button
                  type='button'
                  className='mt-5 w-full black_btn'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'>
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;

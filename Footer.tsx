"use client"

import Image from "next/image"
import Link from "next/link"
import { JSX, SVGProps } from "react"
import { FaXTwitter, FaTelegram,  } from "react-icons/fa6";

const navigation = {
    Home: [
      { name: 'Claim Tokens', href: '#' },
    ],
    Powered: [
      { name: 'Solana Pay', href: '#' },
      { name: 'Solana dApp Scaffold', href: '#' },
    ],
  }
  
  export default function Example() {
    return (
      <footer className="bg-[#ACDBF5] bg-opacity-50 text-black" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="px-6 pb-8 pt-4">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
            <div className="flex items-center text-4xl font-bold">
            <Image src="/images/logo.png" alt="logo" width={77} height={79} className=""/>
            $FERDY
            </div>
            <div className="flex space-x-4 text-white">
            <FaTelegram />
            <FaXTwitter />
            </div>
              <span className="text-sm leading-6 font-semibold">
                contact@ferdyfrens.com
              </span>
              <div className="flex space-x-2">
                <p>© 2024 $FERDY </p>
                <span className="underline">
                Disclaimer
                </span>
              </div>
              <p className="text-sm">Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.</p>
            </div>
              <div className="flex flex-col space-y-8">
                <div>
                  <h3 className="text-sm font-semibold">HOW TO</h3>
                  <ul role="list" className="space-y-2">
                    {navigation.Home.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold">POWERED BY</h3>
                  <ul role="list" className="space-y-2">
                    {navigation.Powered.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p>God of all memecoins.</p>
          </div>
        </div>
      </footer>
    )
  }
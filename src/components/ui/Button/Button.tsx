'use server';

import Link from 'next/link';
import React from 'react';
import "./Button.css"

interface ButtonProps {
  className?: string;
  href: string;
  title: string;
}

function Button({ className, href, title }: ButtonProps) {
  return (
    <Link href={href} className={className}>
      {title}
    </Link>
  );
}


export default Button;

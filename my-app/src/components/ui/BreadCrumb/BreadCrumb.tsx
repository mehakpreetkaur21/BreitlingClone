  import Link from 'next/link';
  import React from 'react';
  import './BreadCrumb.css';

  interface Crumb {
    label: string;
    href?: string;
  }

  interface BreadcrumbProps {
    items: Crumb[];
  }

  export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
      <nav className="breadcrumb">
        <ul className="breadcrumb-list">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="breadcrumb-item">
                {!isLast && item.href ? (
                  <Link href={item.href} className="breadcrumb-link">
                    {item.label}
                  </Link>
                ) : (
                  <span className="breadcrumb-current">{item.label}</span>
                )}
                {!isLast && <span className="breadcrumb-separator">&gt;</span>}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();
  const routes = [
    {
      href: `/${params.storeId}/settings`,
      label: 'Settings',
      active: pathname === `${params.storeId}/settings`,
    },
  ];

  return (
    <nav className={cn('flex items-center space-x-4 lg:space-x-6', className)}>
      {routes.map(({ href, label, active }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            active ? 'text-black dark:text-white' : 'text-muted-foreground'
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

//we could access the store id useing useParams,because our components is in mainNAv,which is in navBar that have access to layout where storeId was called

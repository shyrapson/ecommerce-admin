import React from 'react';
import prismadb from '@/lib/prismadb';

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage = async ({ params }: DashboardPageProps) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  console.log(store, 'dashboard');

  return <div>active store: {store?.name}</div>;
};

export default DashboardPage;

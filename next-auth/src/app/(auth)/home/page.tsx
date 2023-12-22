import React from 'react';
import { currentUser } from '@clerk/nextjs';
import { getXataClient } from '@/xata';
import { redirect } from 'next/navigation';


export default async function Home() {
 const user = await currentUser();
 const userId = user?.id;
 const xataClient = getXataClient()

 if (!userId) {
  redirect('/')
 }

 const filial = await xataClient.db.user_filial.filter({ userId: userId }).getMany()

 if (filial.length < 1) {
  redirect('/selectfilial')
 }

 const emailAddress = user?.emailAddresses[0].emailAddress;

 return (
  <div>
   <div>Hello {emailAddress}</div>
  </div>
 )
}

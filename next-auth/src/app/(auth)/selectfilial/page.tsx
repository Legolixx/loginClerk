import { getXataClient } from '@/xata'
import React from 'react'
import FolderForm from './FolderForm'
import { z } from 'zod'
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const schema = z.object({
 filial: z.string().min(5),
 userId: z.string()
})

export default async function Menu() {
 const { userId } = auth()

 if (!userId) {
  redirect('/')
 }



 async function createFolder(formData: FormData) {
  'use server';
  const parsedForm = schema.parse({
   filial: formData.get('filial'),
   userId
  })
  const xataClient = getXataClient();
  await xataClient.db.filial_info.filter().getMany()
  await xataClient.db.user_filial.create(parsedForm);
  redirect('/home')
 }

 return (
  <div>

   <FolderForm handleCreateFolder={createFolder} />

  </div>
 )
}

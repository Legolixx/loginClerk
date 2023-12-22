'use client'
import React, { useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function FolderForm({ handleCreateFolder }: { handleCreateFolder: (formData: FormData) => void }) {
  const ref = useRef<HTMLFormElement>(null);

  return (

    <form
      className='mb-4 w-full flex gap-x-2 items-center'
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        handleCreateFolder(formData);
        ref.current?.reset();
      }}
      ref={ref}
    >
      <div className='relative w-full'>
        <label
          className='text-gray-300 text-sm font-bold mb-2 hidden'
          htmlFor='filial'
          aria-label='select filial'
        >
        </label>
        <select
          className='block appearance-none w-full bg-gray-800 border-2 border-gray-700 text-white py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline'
          name='filial'
          id='filial'
          defaultValue=''
        >
          <option value='' disabled hidden>
            Selecione uma filial
          </option>
          <option value='ILHA DO RETIRO'>ILHA DO RETIRO</option>
          <option value='RETIRO'>RETIRO</option>
          <option value='HOLANDESES'>HOLANDESES</option>
          <option value='JOÃO PESSOA'>JOÃO PESSOA</option>
          <option value='OLINDA'>OLINDA</option>
          <option value='MANAUS'>MANAUS</option>
          <option value='FEIRA'>FEIRA</option>
          <option value='PIEDADE'>PIEDADE</option>
          <option value='BEQUIMÃO'>BEQUIMÃO</option>
        </select>
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white'>
          <FaChevronDown />
        </div>
      </div>
      <button className='bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-32'>
        submit
      </button>
    </form>
  );
}

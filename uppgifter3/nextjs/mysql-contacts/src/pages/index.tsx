import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import ContactList from '../_client/components/ContactList/ContactList';
import useContactsQuery from '../_client/queries/useContactsQuery';

const Home: NextPage = () => {

  const contacts = useContactsQuery();

  return (
    <div className=''>
      {contacts.isLoading && "Loading"}

      {!contacts.isLoading && (
        <ContactList 
        contacts={contacts.data!}
        />
      )}
    </div>
  );
};

export default Home;
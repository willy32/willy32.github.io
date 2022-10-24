import React from 'react';
import { ContactType } from '../../queries/useContactsQuery';

type ContactListProps = {
    contacts: ContactType[]
}

const ContactList = ({contacts}: ContactListProps) => {
    return (
        <table>
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>PhoneNumber</th>
            </thead>
            <tbody>
                {
                    contacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phonenumber}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default ContactList;
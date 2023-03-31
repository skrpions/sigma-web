interface ContactEssentials {
  department: string;
  city: string;
  name: string;
  email: string;
}

interface ContactOptionals {
  id: number;
}

export type Contact = Required<ContactEssentials> & Partial<ContactOptionals>;

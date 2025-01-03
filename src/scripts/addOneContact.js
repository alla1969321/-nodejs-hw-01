import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  // отримуємо всі що були
  const songs = await readContacts();
  // створюємо новий контакт
  const newSong = createFakeContact();
  // перезаписуємо,додаємо в кінець
  await writeContacts([...songs, newSong]);
};

addOneContact(); 

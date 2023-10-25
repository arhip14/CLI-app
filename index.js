const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const { listContacts, getContactById, removeContact, addContact } = require('./contacts');

const argv = yargs(hideBin(process.argv)).argv;

async function invokeAction({ action, id, name, email, phone }) {
  let result = null;

  switch (action) {
    case 'list':
      result = await listContacts();
      break;

    case 'get':
      result = await getContactById(id);
      break;

    case 'add':
      result = await addContact(name, email, phone);
      break;

    case 'remove':
      result = await removeContact(id);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }

  console.table(result || null);
}

invokeAction(argv);

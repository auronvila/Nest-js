import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8')
    const messages = JSON.parse(contents)
    if(!messages[id]){
      const error = new Error('this id does not exist')
      return error.message
    }
    return messages[id]
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf-8')
    return JSON.parse(contents)
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf-8')
    const messages = JSON.parse(contents)

    const id = Math.floor(Math.random() * 999)

    messages[id] = { id, content }

    await writeFile('messages.json', JSON.stringify(messages))
  }
}
import { readFile, writeFile } from 'fs/promises';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8')
    const messages = JSON.parse(contents)
    if(!messages[id]){
      throw new HttpException(
        'this Id does not exist',
        HttpStatus.NOT_FOUND
      );
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
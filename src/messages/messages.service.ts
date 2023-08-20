import { MessagesRepository } from './messages.repository';
import { readFile } from 'fs/promises';

export class MessagesService {
  messagesRepo: MessagesRepository

  constructor() {
    //service is creating its own dependencies
    //DO NOT DO IT IN REAL APPS
    this.messagesRepo = new MessagesRepository()
  }

  async findOne(id: string) {
    return this.messagesRepo.findOne(id)
  }

  async findAll(){
    return this.messagesRepo.findAll()
  }

  async create(content:string){
    return this.messagesRepo.create(content)
  }
}
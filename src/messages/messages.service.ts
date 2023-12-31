import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

//marking this class for registration inside the DI container.
@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {

  }

  async findOne(id: string) {
    return this.messagesRepo.findOne(id)
  }

  async findAll() {
    return this.messagesRepo.findAll()
  }

  async create(content: string) {
    return this.messagesRepo.create(content)
  }
}
import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getAllMessages() {
    return 'message'
  }

  @Post()
  createMessage() {
    return 'created a message'
  }

  @Get(':id')
  getMessageById() {
    return `got a message by id`
  }

}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {
  }

  @Get()
  async findAll() {
    return await this.messagesService.findAll()
  }

  @Post()
  async createMessage(@Body() body: CreateMessageDto) {
    return await this.messagesService.create(body.content)
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.messagesService.findOne(id)
  }

}

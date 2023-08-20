import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  getAllMessages() {
    return 'message'
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body)
  }

  @Get(':id')
  getMessageById(@Param() id: string) {
    console.log(id)
  }

}

import { Injectable } from '@nestjs/common';
import { ProcessOrderDto } from './dto/process-order.dto';

@Injectable()
export class OrdersService {
  process(processOrderDto: ProcessOrderDto) {
    processOrderDto.status = 'processing';
    return processOrderDto;
  }
}

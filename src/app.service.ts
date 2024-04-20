import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getGoodbye(name?: string): string {
    return `Goodbye ${name || 'World'}!`;
  }
}

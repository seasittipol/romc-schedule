import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import axios from 'axios';

@Injectable()
export class TaskService {
  constructor(private readonly _logger: Logger) {
    _logger = new Logger(TaskService.name);
  }

  @Cron('45 * * * * *', { name: 'notification' })
  async handleCron() {
    this._logger.debug('45 second');
    await axios.post(
      'https://discord.com/api/webhooks/1346900747551248415/tWYAI_MxVEKkif8sKC_OiLRppqufZUSkNFhCXB9NY0KV5WtERxQy-VvW8mNWQxXRS_cy',
      { content: 'test every 45 second' },
    );
  }

  @Timeout(5000)
  handleTimeout() {
    this._logger.debug('Called once after 5 seconds');
  }
}

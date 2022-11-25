import { Injectable } from '@nestjs/common';
import * as Kavenegar from 'kavenegar';

@Injectable()
export class OtpService {
  async sendSmsToUser() {
    const api = Kavenegar.KavenegarApi({
      apikey: process.env.KAVENEGAR_API_KEY,
    });

    api.Send(
      {
        message: 'خدمات پیام کوتاه کاوه نگار',
        sender: '10004346',
        receptor: '09336204435',
      },
      function (response, status) {
        console.log(response);
        console.log(status);
      },
    );
  }
}

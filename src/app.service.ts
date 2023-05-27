import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { IEmployee, IManager } from './models/IManager';
import { Cron, CronExpression } from '@nestjs/schedule';
import { format } from 'date-fns';
import { WebClient } from '@slack/web-api';
import { db } from './db/testdata';

@Injectable()
export class AppService {

  constructor(private readonly httpService: HttpService,
    private readonly slackClient: WebClient) { }

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async birthdayNotification(): Promise<void> {

    try {
      const users = await this.getManagersAndEmployees();
      const birthday = this.checkBithdays(users);
      if (birthday) {
        await this.sendMessageToManagers(users);
      } else {
        return console.log('No birthdays today :(')
      }
    } catch (err) {
      throw new HttpException({ error: 'Something went wrong...', status: HttpStatus.BAD_REQUEST }, HttpStatus.BAD_REQUEST, { cause: err });
    }

  }


  private async getManagersAndEmployees(): Promise<IManager[]> {

    try {
      const response = await firstValueFrom(this.httpService.post('http://test.test/?getbd'));
      const data: IManager[] = response.data;
      // const data: IManager[] = db; // Использовал тестовые данные согласно ТЗ, т. к. нет доступа к url из ТЗ.
      return data;
    } catch (err) {
      throw new HttpException({ error: 'Something went wrong...', status: HttpStatus.BAD_REQUEST }, HttpStatus.BAD_REQUEST, { cause: err });
    }

  }

  private checkBithdays(data: IManager[]): boolean {

    try {
      const today = format(new Date(), 'dd.MM');
      let hasBirthdayToday = false;
      data.forEach(({ sotrudniki }) => {
        Object.values(sotrudniki).some((sotrudnik: IEmployee) => {
          if (sotrudnik.birthday.slice(0, 5) === today) {
            hasBirthdayToday = true;
          }
        });
      });
      return hasBirthdayToday;
    } catch (err) {
      throw new HttpException({ error: 'Something went wrong...', status: HttpStatus.INTERNAL_SERVER_ERROR }, HttpStatus.INTERNAL_SERVER_ERROR, { cause: err });
    }

  }

  private async sendMessageToManagers(data: IManager[]): Promise<void> {

    try {
      const today = format(new Date(), 'dd.MM');
      let managerId: string;

      for (const item of data) {
        let birthdayPersons: string[] = []
        const rukovoditel = item.rukovoditel;
        const sotrudniki = item.sotrudniki;
        managerId = (await this.slackClient.users.lookupByEmail({ email: rukovoditel })).user.id
        for (const key in sotrudniki) {
          const sotrudnik = sotrudniki[key];
          if (sotrudnik.birthday.slice(0, 5) === today) {
            birthdayPersons.push(sotrudnik.name)
          }
        }
        birthdayPersons.join(', ')
        await this.slackClient.chat.postMessage({
          channel: managerId,
          text: `Today is a birthday of: ${birthdayPersons}`,
          as_user: true,
        });
      }
    } catch (err) {
      throw new HttpException({ error: 'Something went wrong...', status: HttpStatus.BAD_REQUEST }, HttpStatus.BAD_REQUEST, { cause: err });
    }

  }

}
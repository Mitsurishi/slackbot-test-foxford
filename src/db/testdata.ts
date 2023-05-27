import { IManager } from 'src/models/IManager';

export const db: IManager[] = [
    {
        'rukovoditel': 'mitsurishiini@gmail.com',
        'sotrudniki':
        {
            'sotrudnik1': {
                'name': 'Иванов Иван Иванович',
                'email': 'ivanov.i@foxford.ru',
                'birthday': '27.05.2021',
            },
            'sotrudnik2': {
                'name': 'Иванов Василий Иванович',
                'email': 'ivanov.v@foxford.ru',
                'birthday': '27.05.2021',
            },
        }
    },
    {
        'rukovoditel': 'mrsaloed@yahoo.com',
        'sotrudniki':
        {
            'sotrudnik1': {
                'name': 'Сидоров Иван Иванович',
                'email': 'sidorov.i@foxford.ru',
                'birthday': '27.05.2021',
            },
            'sotrudnik2': {
                'name': 'Сидоров Василий Иванович',
                'email': 'sidorov.v@foxford.ru',
                'birthday': '27.05.2021',
            },
        }
    }
]
import avatar1 from './assets/avatar1.png';
import avatar2 from './assets/avatar2.png';
import avatar3 from './assets/avatar3.png';
import avatar4 from './assets/avatar4.png';

export const url = 'https://api.chucknorris.io/jokes/random';

export const mockedChats = [
  [
    {
      id: '111',
      name: 'Alice Freeman',
      avatar: avatar1
    },
    [
      {
        userId: '111',
        id: '1',
        message:
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        creationDate: new Date('2022-08-17T03:24:00')
      },
      {
        userId: '777',
        id: '2',
        message:
          'Hello Hello ello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello, Alice',
        creationDate: new Date('2022-08-17T03:24:00')
      },
      {
        userId: '777',
        id: '3',
        message: 'Hello, Alice',
        creationDate: new Date('2022-08-18T03:24:00')
      }
    ]
  ],
  [
    {
      id: '222',
      name: 'Josefina',
      avatar: avatar2
    },
    [
      {
        userId: '222',
        id: '1',
        message: 'Hello, Taras',
        creationDate: new Date('2022-08-16T03:24:00')
      },
      {
        userId: '777',
        id: '2',
        message: 'Hello, Josefina',
        creationDate: new Date('2022-08-16T03:24:00')
      }
    ]
  ],
  [
    {
      id: '333',
      name: 'Velazquez',
      avatar: avatar3
    },
    [
      {
        userId: '333',
        id: '1',
        message: 'Hi, Taras',
        creationDate: new Date('2022-08-14T03:24:00')
      },
      {
        userId: '777',
        id: '2',
        message: 'Hi, Velazquez',
        creationDate: new Date('2022-08-14T03:24:00')
      }
    ]
  ],
  [
    {
      id: '444',
      name: 'Barrera',
      avatar: avatar4
    },
    [
      {
        userId: '444',
        id: '1',
        message: 'Hi, Taras',
        creationDate: new Date('2022-08-12T03:24:00')
      },
      {
        userId: '777',
        id: '2',
        message: 'Hi, Barrera',
        creationDate: new Date('2022-08-12T03:24:00')
      }
    ]
  ]
];

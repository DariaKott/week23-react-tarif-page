import React from 'react';
import './styles.scss';
import { Tarif } from '../Tarif';

const tarifs = [
  {
    title: 'Безлимитный 300',
    price: '300',
    speed: 'до 10 Мбит/сек',
    details: 'Объем включенного трафика не ограничен',
    isLarge: false,
    colorClass: 'tarif-color-1',
  },
  {
    title: 'Безлимитный 450',
    price: '450',
    speed: 'до 50 Мбит/сек',
    details: 'Объем включенного трафика не ограничен',
    isLarge: false,
    colorClass: 'tarif-color-2',
  },
  {
    title: 'Безлимитный 550',
    price: '550',
    speed: 'до 100 Мбит/сек',
    details: 'Объем включенного трафика не ограничен',
    isLarge: true,
    colorClass: 'tarif-color-3',
  },
  {
    title: 'Безлимитный 1000',
    price: '1000',
    speed: 'до 200 Мбит/сек',
    details: 'Объем включенного трафика не ограничен',
    isLarge: false,
    colorClass: 'tarif-color-4',
  },
];

function TarifList() {
  return (
    <div className="list_container">
      {tarifs.map((tarif, index) => (
        <Tarif key={index} {...tarif} />
      ))}
    </div>
  );
}

export { TarifList };

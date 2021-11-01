import { Component } from '@angular/core';
import {Herb} from './herb';

@Component({
  selector: 'app-herbs',
  templateUrl: './herbs.component.html',
  styleUrls: ['./herbs.component.scss']
})
export class HerbsComponent {
  herbs: Herb[] = [
    {
      name: 'Bazylia',
      img: '',
      description: 'Przyprawa do zup',
      light: 'Dużo światła',
      monthOfSow: 'Kwiecień',
      waterConsumptionPerDay: 0.25,
      minTemperature: 21,
      maxTemperature: 25,
    },
    {
      name: 'Liść laurowy',
      img: '',
      description: 'Przyprawa do zup',
      light: 'Śrenie natęzenie światła',
      monthOfSow: 'Kwiecień',
      waterConsumptionPerDay: 0.10,
      minTemperature: 18,
      maxTemperature: 22,
    },
    {
      name: 'Szczypiorek',
      img: '',
      description: 'Przyprawa do zup',
      light: 'Dużo światła',
      monthOfSow: 'Kwiecień',
      waterConsumptionPerDay: 0.25,
      minTemperature: 20,
      maxTemperature: 23,
    },
    {
      name: 'Tymianek',
      img: '',
      description: 'Przyprawa do zup',
      light: 'Średnie natężenie światła',
      monthOfSow: 'Kwiecień',
      waterConsumptionPerDay: 0.15,
      minTemperature: 18,
      maxTemperature: 23,
    },
  ];
}

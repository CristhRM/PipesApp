import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent {
    name: string = 'Andres';
    gender: string = 'male';

    invitationMap = {
      'feminine': 'invite her',
      'male': 'invite he'
    }

    changeName() {
      this.name = 'Susana';
      this.gender = 'feminine';
    }

    clients: string[] = ['Maria', 'Pedro', 'Juan', 'Eduardo', 'Hernando', 'Dario'];
    clientsMap= {
      '=0': 'dont have clients waiting.',
      '=1': 'have # client waiting.',
      'other': 'have # clients waiting.'
    }

    deleteClient() {
      this.clients.shift();
    }

    person = {
      name: 'Andres',
      age: 27,
      address: 'Medellín, CO'
    }

    heroes = [
      {
        name: 'Superman',
        fly: true
      },
      {
        name: 'Robin',
        fly: false
      },
      {
        name: 'Batman',
        fly: false
      }
    ];

    myObservable = interval(5000);
    valuePromise = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('Promise end....')
        }, 3500)
    });
}

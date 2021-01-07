import { Component, OnInit } from '@angular/core';
import { Subject, Observable, interval } from 'rxjs';
import { takeUntil, map, shareReplay, distinctUntilChanged } from 'rxjs/operators';

const aiguilleHeure = 360/12;
const aiguilleMinutes = 360/60;
const aiguilleSecondes = 360/60;

@Component({
  selector: 'app-horloge',
  templateUrl: './horloge.component.html',
  styleUrls: ['./horloge.component.scss']
})
export class HorlogeComponent implements OnInit {

  destroy: Subject<void> = new Subject();
  heures?: Observable<number>;
  minutes?: Observable<number>;
  secondes?: Observable<number>;

  constructor() { }

  ngOnInit(): void {

    //Vient vérifier toutes les 250 ms
    const date = interval(250).pipe(
      // Désinscrire tous les sujets quand le composant est détruit
      takeUntil(this.destroy),
      //Stream
      map(() => new Date()),
      //Partager la valeur
      shareReplay()
    );

    this.heures = date.pipe(
      map(date => aiguilleHeure * (date.getHours() % 12) - 90),
      distinctUntilChanged()
    );
    this.minutes = date.pipe(
      map(date => aiguilleMinutes * date.getMinutes() - 90),
      distinctUntilChanged()
    );
    this.secondes = date.pipe(
      map(date => aiguilleSecondes * date.getUTCSeconds() - 90),
      distinctUntilChanged()
    );
  }

  ngOnDestroy() {
    this.destroy.next();
  }

}

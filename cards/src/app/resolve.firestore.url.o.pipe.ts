import {Pipe, PipeTransform} from "@angular/core";
import { AngularFireStorage } from 'angularfire2/storage';
import { Card } from './card';

@Pipe({name: 'resolveurlbyowner'})

export class ResolveFirestoreUrlByOwnerPipe implements PipeTransform {

  constructor(public storage: AngularFireStorage) {}

  transform(card: Card): any {
    let rurl = this.storage.ref(card.owner ? card.bimage : card.image).getDownloadURL();
    return rurl;
  }
}
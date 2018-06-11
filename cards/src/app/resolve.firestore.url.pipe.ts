import {Pipe, PipeTransform} from "@angular/core";
import { AngularFireStorage } from 'angularfire2/storage';

@Pipe({name: 'resolveurl'})

export class ResolveFirestoreUrlPipe implements PipeTransform {

  constructor(public storage: AngularFireStorage){}

  transform(url: any): any {
    let rurl = this.storage.ref(url).getDownloadURL();
    return rurl;
  }
}
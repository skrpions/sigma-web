import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private translateSvc: TranslateService){}

  transform(value: any): any {
    return this.translateSvc.getTranslate(value) ? this.translateSvc.getTranslate(value) : '';
  }

}

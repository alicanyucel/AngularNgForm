import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    Personel Projesi NgForm Örnek 
  </h1>
  <div>
    <form #addForm="ngForm" (ngSubmit)="save(addForm)" autocomplete="off">
    <div>
      Personel Adı
      <input name="name" [(ngModel)]="addModel.name" required minlength="3" maxlength="20"/>
    </div>
    <div>
      Bölümü
      <select name="profession" [(ngModel)]="addModel.profession" required>
        <option>Muhasebe</option>
        <option>Mühendis</option>
        <option>idari İşler ve İnsan Kaynakları</option>
        <option>Teknik Destek</option>
        <option>Eğitim</option>
      </select>
    </div>
  <div>
    İşe Giriş Tarihi
    <input  [(ngModel)]="addModel.date" name="date"ctype="date" required/>
  </div>
  <div>
    <button [disabled]="!addForm.valid">Kaydet</button>
  </div>
    </form>
  <hr>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Personel Adı</th>
        <th>Bölüm</th>7
        <th>İşe Giriş Tarihi</th>
        <th>İşlemler
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let e of employess let i=index">
     <td>{{i+1}}</td>
     <td>{{e.name}}</td>
     <td>{{e.profession}}</td>
     <td>{{e.date | date:'dd.MM.yyyy'}}</td>
     <td><button>Güncelle</button></td>
      </tr>
    </tbody>
  </table> 
  <div>
    <form #updateForm="ngForm" (ngSubmit)="update(updateForm)" autocomplete="off">
    <div>
      Personel Adı
      <input name="updatename" [(ngModel)]="updateModel.name" required minlength="3" maxlength="20"/>
    </div>
    <div>
      Bölümü
      <select name="updateprofession" [(ngModel)]="updateModel.profession" required>
        <option>Muhasebe</option>
        <option>Mühendis</option>
        <option>idari İşler ve İnsan Kaynakları</option>
        <option>Teknik Destek</option>
        <option>Eğitim</option>
      </select>
    </div>
  <div>
    İşe Giriş Tarihi
    <input  [(ngModel)]="addModel.date" name="updatedate" type="date" required/>
  </div>
  <div>
    <button [disabled]="!updateForm.valid">Güncelle</button>
  </div>
    </form>
  <hr>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Personel Adı</th>
        <th>Bölüm</th>7
        <th>İşe Giriş Tarihi</th>
        <th>İşlemler
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let e of employess let i=index">
     <td>{{i+1}}</td>
     <td>{{e.name}}</td>
     <td>{{e.profession}}</td>
     <td>{{e.date | date:'dd.MM.yyyy'}}</td>
     <td><button (click)="get(e,i)">Güncelle</button></td>
      </tr>
    </tbody>
  </table>  

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employess: Employee[] = [];
  addModel = new Employee();
  updateModel = new Employee();
  index: number = 0;
  isUpdateFormActive: boolean = false;
  title = 'ngFormApp';
  constructor(
    private _date: DatePipe
  ) {
    this.addModel.date = this._date.transform(new Date(), 'yyyy.MM.dd');
  }
  save(form: NgForm) {
    if (form.valid) {
      this.employess.push(this.addModel);
      this.addModel = new Employee();
      this.addModel.date = this._date.transform(new Date(), 'yyyy.MM.dd');
    }
  }
}
get(model: Employee, index: Number){
    this.index = index;
    this.updateModel={...model};
    this.isUpdateFormActive=true;
}
class Employee {
  name: string = "";
  profession: string = "";
  date: string = "";
}
cancel(){
  this.isUpdateFormActive = false;
}
update(form:NgForm){
if(form.valid){
  this.employess[this.index]=this.updateModel;
}
}



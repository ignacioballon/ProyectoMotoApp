import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from "rxjs/operators";
import { Observable } from "rxjs/internal/observable";
import { Router } from "@angular/router";
import { FotosService } from "../../servicios/fotos.service";



@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {


  nombreMotoTaxi:string;
  apellidoMotoTaxi:string;
  telefonoMotoTaxi:string;
  placaMotoTaxi:string;
  carnetIdentidadMotoTaxi:string;
  fechaNacimientoMotoTaxi:Date;
  email:string;
  password:string;
  imagenMotoTaxi:string;

  urlImagen: Observable<string>;

  archivo: any;
  rutaArchivo: string;
  image: any;

  constructor(private authService : AuthService, 
              private AFStorage : AngularFireStorage, 
              public router : Router,
              private fotosService: FotosService
              ) { }

  ngOnInit() {
  }

  registrando(){
    this.authService.registrarMotoTaxi(this.nombreMotoTaxi,this.apellidoMotoTaxi,this.telefonoMotoTaxi,
    this.placaMotoTaxi,this.email,this.password,this.imagenMotoTaxi,
    this.carnetIdentidadMotoTaxi,this.fechaNacimientoMotoTaxi).then( res =>{ 
    
      

    }).catch(err=> {alert("No se pudo registrar al moto taxista");
  })

  this.nombreMotoTaxi="";
  this.password="";
  this.apellidoMotoTaxi="";
  this.email="";
  this.placaMotoTaxi="";
  this.imagenMotoTaxi="";
  this.telefonoMotoTaxi="";
  this.carnetIdentidadMotoTaxi="";
  this.urlImagen=null;
  this.fechaNacimientoMotoTaxi=null;
  
  }

  onUpload(e){
  
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    this.archivo = file;
    const filePath=`profile_${id}`;
    const ref = this.AFStorage.ref(filePath);
    const task = this.AFStorage.upload(filePath, file);
    task.snapshotChanges().pipe(finalize(() => this.urlImagen = ref.getDownloadURL())).subscribe();
  }

  tomarFoto(){
   this.image=this.fotosService.takePicture();
}
}

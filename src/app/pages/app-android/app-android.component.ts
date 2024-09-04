import { Component } from '@angular/core';
import { AndroidComponent } from 'src/app/components/icon/android/android.component';
import { DownloadComponent } from 'src/app/components/icon/download/download.component';
import { addIcons } from "ionicons";

@Component({
  selector: 'app-app-android',
  standalone: true,
  imports: [ DownloadComponent, AndroidComponent ],
  templateUrl: './app-android.component.html',
  styleUrl: './app-android.component.css'
})
export class AppAndroidComponent {

}

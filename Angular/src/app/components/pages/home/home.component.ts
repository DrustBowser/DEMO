import { Component } from '@angular/core';
import { convertFileToDataUri } from 'src/app/shared/utils/utils.functions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  claims: any = [
    { status: 'Open', program: 'UI', bye: '12/30/2023', paidDate: 1016, mba: 4918, wba: 189, rba: 3898},
    { status: 'Expired', program: 'UI', bye: '03/19/2022', paidDate: 512, mba: 4524, wba: 174, rba: 4012},
    ]

  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log(convertFileToDataUri(file));
    }
  }

}

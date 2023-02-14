import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {
  constructor() { }

  validatePhoneNumber(): RegExp {
    return /^[5][0-9]{8}$/
    //KSA Pattern --- 5xx-xxx-xxx
  }
  validatePassword(): RegExp {
    return /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*)).{8,}/
    //Password Must be Contain 8 Digits [Special Character & Numbers & Alpha]
    // EX : test@#123
  }

  validateEmail(): RegExp {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  }

  validationEnglishCharacters(): RegExp {
    return /^[a-zA-Z \-\']+/
  }

  keyPressEnglishOnly(event: any) {
    const pattern = /^[a-zA-Z \-\'\0-9]+/
    let inputChar = String.fromCharCode(event.charCode)
    let charCode = event.which || event.keyCode;
    let charStr = String.fromCharCode(charCode);
    if (event.keyCode != 32 && event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault()
    } else {
      return
      //Do Nothing
    }
  }


  keyPressEmailChecker(event: any) {
    const pattern = /^[a-zA-Z \-\'\@\0-9]+/
    let inputChar = String.fromCharCode(event.charCode)
    let charCode = event.which || event.keyCode;
    let charStr = String.fromCharCode(charCode);
    if (event.keyCode != 32 && event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault()
    } else {
      return
      //Do Nothing
    }
  }

  validationArabicCharacters(): RegExp {
    return /^[\u0621-\u064A\u0660-\u0669]+$/
  }

  keyPressArabicOnly(event: any) {
    const pattern = /^[\u0621-\u064A\u0660-\u0669\0-9]+$/
    let inputChar = String.fromCharCode(event.charCode)
    let charCode = event.which || event.keyCode;
    let charStr = String.fromCharCode(charCode);
    if (event.keyCode != 32 && event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault()
    } else {
      return
      //Do Nothing
    }
  }

  validationNumberOnly(): RegExp {
    return /^[0-9]+$/
  }



  keyPressNumberOnly(event: any) {
    const pattern = /[0-9\+\-\.\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    let charCode = event.which || event.keyCode;
    let charStr = String.fromCharCode(charCode);
    if ((event.keyCode != 8 && !pattern.test(inputChar)) || (charStr == "-" || charStr == "+")) {
      event.preventDefault();
    }
  }


  keyPressCharactersOnly(event: any) {
    let inputCharQ = String.fromCharCode(event.charCode);
    let charCode = event.which || event.keyCode;
    let charStr = String.fromCharCode(charCode);
    const stringAllow = /^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_]*$/
    let inputChar = String.fromCharCode(event.charCode);
    if ((event.keyCode != 32 && event.keyCode != 8 && !stringAllow.test(inputChar)) || (charStr == '؟')) {
      event.preventDefault();
    }
  }

  customForCarModel(event: any): void {
    const strAllowed = /^[a-zA-Z0-9]*$/;
    let inputStr = String.fromCharCode(event.charCode)
    if (event.keyCode != 8 && !strAllowed.test(inputStr)) {
      event.preventDefault();
    }
  }

  // preventPlusAndMinus(event:any){
  //   let charCode = event.which || event.keyCode;
  //   let charStr = String.fromCharCode(charCode);
  //   if (charStr == "-" || charStr == "+") {
  //       event.preventDefault()
  //   }
  // }


  keyPressEnglishAndNumbersOnly(event: any) {
    const pattern = /[a-zA-Z0-9]/
    const pattern_ = /^[\u0621-\u064A\u0660-\u0669 ]+$/
    let inputChar = String.fromCharCode(event.charCode)
    let charCode = event.which || event.keyCode;
    let charStr = String.fromCharCode(charCode);
    if (event.keyCode != 32 && event.keyCode != 8 && !pattern.test(inputChar) && !pattern_.test(inputChar)) {
      event.preventDefault()
    } else {
      return
      //Do Nothing
    }
  }
}

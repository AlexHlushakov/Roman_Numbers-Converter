const convertButtton = document.querySelector('#convert-btn'),
   numInput = document.querySelector('#number'),
   resultField = document.querySelector('#result');


convertButtton.addEventListener('click', () => {
   if (numInput.value.length > 4) {
      alert("Your number is out of convertion range! Please, enter number from 1 to 9999");
   } else {
      resultField.innerText = "";
      let str = '';
      let num = Array.from(String(numInput.value), Number);
      console.log(num);
      console.log(num.length);
      for (let i = 0; i < num.length; num.shift()) {
         if (num.length > 3 && num.length < 5) {
            console.log("thousand")
            for (let j = 0; j < num[i]; j++) {
               console.log('for thousand');
               str += 'M';
            }
         } else if (num.length > 2 && num.length < 4) {
            console.log("hundred")
            switch (num[i]) {
               case 1:
                  str += "C";
                  break;
               case 2:
                  str += "CC";
                  break;
               case 3:
                  str += "CCC";
                  break;
               case 4:
                  str += "CD";
                  break;
               case 5:
                  str += "D";
                  break;
               case 6:
                  str += "DC";
                  break;
               case 7:
                  str += "DCC";
                  break;
               case 8:
                  str += "DCCC";
                  break;
               case 9:
                  str += "CM";
                  break;
            }
         } else if (num.length > 1 && num.length < 3) {
            console.log("tens")
            switch (num[i]) {
               case 1:
                  str += "X";
                  console.log(str);
                  break;
               case 2:
                  str += "XX";
                  break;
               case 3:
                  str += "XXX";
                  break;
               case 4:
                  str += "XL";
                  break;
               case 5:
                  str += "L";
                  break;
               case 6:
                  str += "LX";
                  break;
               case 7:
                  str += "LXX";
                  break;
               case 8:
                  str += "LXXX";
                  break;
               case 9:
                  str += "XC";
                  break;
            }
         } else if (num.length > 0 && num.length < 2) {
            console.log("one")
            switch (num[i]) {
               case 1:
                  str += "I";
                  break;
               case 2:
                  str += "II";
                  break;
               case 3:
                  str += "III";
                  break;
               case 4:
                  str += "IV";
                  break;
               case 5:
                  str += "V";
                  console.log(str);
                  break;
               case 6:
                  str += "VI";
                  break;
               case 7:
                  str += "VII";
                  break;
               case 8:
                  str += "VIII";
                  break;
               case 9:
                  str += "IX";
                  break;
            }
         }
      }
      console.log(str.length);
      console.log(str);
      resultField.innerText = str;
   }
})
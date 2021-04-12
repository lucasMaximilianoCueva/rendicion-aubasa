const { Observable } = rxjs;
const { fromEvent } = rxjs;

const input = document.querySelector(".inputText1000");
const input2 = document.querySelector(".inputText500");
const input3 = document.querySelector(".inputText200");
const input4 = document.querySelector(".inputText100");
const input5 = document.querySelector(".inputText50");
const input6 = document.querySelector(".inputText20");
const input7 = document.querySelector(".inputText10");
const input8 = document.querySelector(".inputText5");
const input9 = document.querySelector(".inputText2");
const input10 = document.querySelector(".inputText1");
const input11 = document.querySelector(".inputTextRetiro");
const input12 = document.querySelector(".inputTextCambio");
const span = document.querySelector(".textCopy");
const span2 = document.querySelector(".textCopy2");
const span3 = document.querySelector(".textCopy3");
const span4 = document.querySelector(".textCopy4");
const span5 = document.querySelector(".textCopy5");
const span6 = document.querySelector(".textCopy6");
const span7 = document.querySelector(".textCopy7");
const span8 = document.querySelector(".textCopy8");
const span9 = document.querySelector(".textCopy9");
const span10 = document.querySelector(".textCopy10");

span.textContent = 0;
span2.textContent = 0;
span3.textContent = 0;
span4.textContent = 0;
span5.textContent = 0;
span6.textContent = 0;
span7.textContent = 0;
span8.textContent = 0;
span9.textContent = 0;
span10.textContent = 0;

let res = 0;
let res2 = 0;
let res3 = 0;
let res4 = 0;
let res5 = 0;
let res6 = 0;
let res7 = 0;
let res8 = 0;
let res9 = 0;
let res10 = 0;
let res11 = 0;
let res12 = 0;

total = document.querySelector('.spTotal');
totalCount = document.querySelector('.totalCount');

const observableInput = new Observable((suscriber) => {
  fromEvent(input, "input").subscribe((event) => {
      suscriber.next(input.value);
  });
  return () => {
    console.log("Unsubscribe");
    input.value = '';
    span.textContent = '';
    input.disabled = true;
  };
});

const suscriptor = observableInput
  .subscribe(
    (response) => {
      span.textContent = `$${new Intl.NumberFormat("de-DE").format(response * 1000)}`
      res = response * 1000
    } 
  );

/*-------------------------------  500  ----------------------------------------*/

  const observableInput2 = new Observable((suscriber) => {
    fromEvent(input2, "input").subscribe((event) => {
        suscriber.next(input2.value);
    });
    return () => {
      console.log("Unsubscribe");
      input2.value = '';
      span2.textContent = '';
      input2.disabled = true;
    };
  });
  
  const suscriptor2 = observableInput2
    .subscribe(
      (response) => {
        span2.textContent = `$${new Intl.NumberFormat("de-DE").format(response * 500)}`
        res2 = response * 500
      } 
    );

    /*-------------------------------  200  ----------------------------------------*/

  const observableInput3 = new Observable((suscriber) => {
    fromEvent(input3, "input").subscribe((event) => {
        suscriber.next(input3.value);
    });
    return () => {
      console.log("Unsubscribe");
      input3.value = '';
      span3.textContent = '';
      input3.disabled = true;
    };
  });
  
  const suscriptor3 = observableInput3
    .subscribe(
      (response) => {
        span3.textContent = `$${new Intl.NumberFormat("de-DE").format(response * 200)}` // next()
        res3 = response * 200
      }
    );

    /*-------------------------------  100  ----------------------------------------*/

  const observableInput4 = new Observable((suscriber) => {
    fromEvent(input4, "input").subscribe((event) => {
        suscriber.next(input4.value);
    });
    return () => {
      console.log("Unsubscribe");
      input4.value = '';
      span4.textContent = '';
      input4.disabled = true;
    };
  });
  
  const suscriptor4 = observableInput4
    .subscribe(
      (response) => {
        span4.textContent = `$${new Intl.NumberFormat("de-DE").format(response * 100)}` // next()
        res4 = response * 100
      }
    );

    /*-------------------------------  50  ----------------------------------------*/

  const observableInput5 = new Observable((suscriber) => {
    fromEvent(input5, "input").subscribe((event) => {
        suscriber.next(input5.value);
    });
    return () => {
      console.log("Unsubscribe");
      input5.value = '';
      span5.textContent = '';
      input5.disabled = true;
    };
  });
  
  const suscriptor5 = observableInput5
    .subscribe(
      (response) => {
        span5.textContent = `$${new Intl.NumberFormat("de-DE").format(response * 50)}` // next()
        res5 = response * 50
      }
    );

    /*-------------------------------  20  ----------------------------------------*/

  const observableInput6 = new Observable((suscriber) => {
    fromEvent(input6, "input").subscribe((event) => {
        suscriber.next(input6.value);
    });
    return () => {
      console.log("Unsubscribe");
      input6.value = '';
      span6.textContent = '';
      input6.disabled = true;
    };
  });
  
  const suscriptor6 = observableInput6
    .subscribe(
      (response) => {
        span6.textContent = `$${new Intl.NumberFormat("de-DE").format(response * 20)}` // next()
        res6 = response * 20
      }
    );

    /*-------------------------------  10  ----------------------------------------*/

  const observableInput7 = new Observable((suscriber) => {
    fromEvent(input7, "input").subscribe((event) => {
        suscriber.next(input7.value);
    });
    return () => {
      console.log("Unsubscribe");
      input7.value = '';
      span7.textContent = '';
      input7.disabled = true;
    };
  });
  
  const suscriptor7 = observableInput7
    .subscribe(
      (response) => {
        span7.textContent = `$${new Intl.NumberFormat("de-DE").format(response * 10)}` // next()
        res7 = response * 10
      }
    );

    /*-------------------------------  5  ----------------------------------------*/

  const observableInput8 = new Observable((suscriber) => {
    fromEvent(input8, "input").subscribe((event) => {
        suscriber.next(input8.value);
    });
    return () => {
      console.log("Unsubscribe");
      input8.value = '';
      span8.textContent = '';
      input8.disabled = true;
    };
  });
  
  const suscriptor8 = observableInput8
    .subscribe(
      (response) => {
        span8.textContent = `$${new Intl.NumberFormat("de-DE").format(response * 5)}` // next()
        res8 = response * 5
      }
    );

    /*-------------------------------  2  ----------------------------------------*/

  const observableInput9 = new Observable((suscriber) => {
    fromEvent(input9, "input").subscribe((event) => {
        suscriber.next(input9.value);
    });
    return () => {
      console.log("Unsubscribe");
      input9.value = '';
      span9.textContent = '';
      input9.disabled = true;
    };
  });
  
  const suscriptor9 = observableInput9
    .subscribe(
      (response) => {
        span9.textContent = `$${new Intl.NumberFormat("de-DE").format(response * 2)}` // next()
        res9 = response * 2
      }
    );

    /*-------------------------------  1  ----------------------------------------*/

  const observableInput10 = new Observable((suscriber) => {
    fromEvent(input10, "input").subscribe((event) => {
        suscriber.next(input10.value);
    });
    return () => {
      console.log("Unsubscribe");
      input10.value = '';
      span10.textContent = '';
      input10.disabled = true;
    };
  });
  
  const suscriptor10 = observableInput10
    .subscribe(
      (response) => {
        span10.textContent = `$${new Intl.NumberFormat("de-DE").format(response * 1)}` // next()
        res10 = response * 1
      }
    );

       /*-------------------------------  RETIRO  ----------------------------------------*/

  const observableInput11 = new Observable((suscriber) => {
    fromEvent(input11, "input").subscribe((event) => {
        suscriber.next(input11.value);
    });
    return () => {
      console.log("Unsubscribe");
      input11.value = '';
      input11.disabled = true;
    };
  });
  
  const suscriptor11 = observableInput11
    .subscribe(
      (response) => {
        res11 = response * 1
      }
    );

     /*-------------------------------  RETIRO  ----------------------------------------*/

  const observableInput12 = new Observable((suscriber) => {
    fromEvent(input12, "input").subscribe((event) => {
        suscriber.next(input12.value);
    });
    return () => {
      console.log("Unsubscribe");
      input12.value = '';
      input12.disabled = true;
    };
  });
  
  const suscriptor12 = observableInput12
    .subscribe(
      (response) => {
        res12 = response * 1
      }
    );

   
   


    fromEvent(totalCount, 'click').subscribe(() => {
      total.textContent = `$${new Intl.NumberFormat("de-DE")
      .format(res + res2 + res3 + res4 + res5 + res6 + res7 + res8 + res9 + res10 + res11 - res12)
      }`;
    });


    let num = 1000;
    console.log(new Intl.NumberFormat("de-DE").format(num));

import { Observable } from "rxjs";

const observable = new Observable(function subscribe(subscriber) {
  subscriber.next("1"); /* next generara nuovi valori di tipo string o number */
  subscriber.next("2");
  subscriber.complete(); /* genera notifiche che dobbiamo catturare*/
  subscriber.error('NUOVO ERRORE');
  subscriber.next("3"); /* non lo visualizzerò perchè ho fatto il complete */
});

observable.subscribe(val =>console.log("val", val)
); /* stiamo passando il metodo next*/
/* => è una callback che prende in ingresso una stringa e va a stamparla*/

console.log('CATTURA NOTIFICHE');
/* CATTURARE LE NOTICHE DI COMPLETE ED ERROR */
const observable2 = new Observable(function subscribe(subscriber) {
try{
  subscriber.next('1');
  subscriber.next('2');
  }catch(error){
    subscriber.error();
  }
  subscriber.next('3')

  });

observable.subscribe(
  val =>console.log("val", val),
  error => console.log('error', error),
  () => console.log('complete')

)

const subscriber ={
 next:  val =>console.log("val", val),
  error: error => console.log('error', error),
 complete : () => console.log('complete')
}
observable.subscribe(subscriber);
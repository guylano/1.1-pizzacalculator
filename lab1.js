// begin hier je JavaScript commandos
var smol=3
var mad=6
var bigboi=9

var kaas=prompt('hoeveel small pizza`s wil je?');



document.write(kaas+' small pizza(`s)  €')
document.write(+ 3 * kaas);
document.write('           1 small pizza is €3')
document.write('<br>')

var fiets=prompt('hoeveel medium pizza`s wil je?');



document.write(fiets+' medium pizza(`s)  €')
document.write(+ 6 * fiets);
document.write('           1 medium pizza is €6')
document.write('<br>')



var schoen=prompt('hoeveel grote pizza(`s) wil je?');



document.write(schoen+' grote pizza(`s)  €')
document.write(+ 9 * schoen);
document.write('          1 grote pizza is €9')
document.write('<br>')

document.write('<br><br><br><br><br><br>')
document.write('totaal bedrag €'+ (smol * kaas + mad * fiets + bigboi * schoen))

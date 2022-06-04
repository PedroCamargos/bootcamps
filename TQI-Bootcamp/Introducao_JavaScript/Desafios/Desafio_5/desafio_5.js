const times =  gets();

function partidas(n){
    if(n % 2 == 0){
    let partidas = (n / 2);
    return partidas;
    } else {
        let partidas = ((n-1) / 2);
        return partidas;
    }
  }

 function ttimes(n){
    if(n % 2 == 0){
    let tTimes = (n / 2);
    return tTimes;
    } else {
        let tTimes = ((n-1) / 2) + 1;
        return tTimes;
    }
  }

part = partidas(times);
tim =  ttimes(times);

while (tim >= 2){
        part = part + partidas(tim);
        tim = ttimes(tim);
    }

    print(part)
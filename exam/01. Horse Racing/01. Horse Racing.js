function horseRacing(input) {
  let horses = input.shift().split('|');
  for (let command of input) {
    if (command === 'Finish') {
      break;
    }
    
    let [action, horse1, horse2] = command.split(' ');

    switch (action) {
      case 'Retake':
        let horse1Index = horses.indexOf(horse1);
        let horse2Index = horses.indexOf(horse2);
        if (horse1Index < horse2Index) {
          horses.splice(horse2Index, 1, horse1);
          horses.splice(horse1Index, 1, horse2);
          console.log(`${horse1} retakes ${horse2}.`);
        }
        break;
        
      case 'Trouble':
        let horseIndex = horses.indexOf(horse1);
        if ((horseIndex < horses.length) && (horseIndex !== 0)) {
          [horses[horseIndex], horses[horseIndex - 1]] = [horses[horseIndex - 1], horses[horseIndex]]
          console.log(`Trouble for ${horse1} - drops one position.`);
        }
        break;
        
      case 'Rage':
        let rageIndex = horses.indexOf(horse1);
        if (rageIndex === horses.length - 2) {
          [horses[rageIndex], horses[rageIndex + 1]] = [horses[rageIndex + 1], horses[rageIndex]]
        } else if (rageIndex < horses.length - 2) {
          horses.splice(rageIndex, 1);
          horses.splice(rageIndex + 2, 0, horse1);
        }
        console.log(`${horse1} rages 2 positions ahead.`);
        break;
        
      case 'Miracle':
        let lastHorse = horses.shift();
        horses.push(lastHorse);
        console.log(`What a miracle - ${lastHorse} becomes first.`);
        break;
        
      // default:
      //   break;
    }
  }
  
  console.log(horses.join('->'));
  console.log(`The winner is: ${horses[horses.length - 1]}`);
}



horseRacing(['Bella|Alexia|Sugar',
'Retake Alexia Sugar',
'Rage Bella',
'Trouble Bella',
'Finish']);

// horseRacing(['Onyx|Domino|Sugar|Fiona',
// 'Trouble Onyx',
// 'Retake Onyx Sugar',
// 'Rage Domino',
// 'Miracle',
// 'Finish']);

// horseRacing(['Fancy|Lilly',
// 'Retake Lilly Fancy',
// 'Trouble Lilly',
// 'Trouble Lilly',
// 'Finish',
// 'Rage Lilly']);

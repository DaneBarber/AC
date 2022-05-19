const hero = {
  level: 1,
  health: 100,
}

const superHero = {
  health: 100,
}

const boss = {
  level: 1,
  health: 100,
  attack: 5,
}

let multiplier = 1 + boss.level
const gameHealth = 100

function attackBoss() {
  boss.health -= 5
  if (boss.health <= 0) {
    boss.health = 0,
      console.log("boss is ded! Level UP!!!"),
      boss.level += 1,
      boss.attack *= 2,
      boss.health = gameHealth * boss.level

  }
  let maxHealth = (gameHealth * boss.level)
  console.log(maxHealth, 'max Health')
  let displayHealth = (boss.health / maxHealth) * 100
  console.log(displayHealth, "display health")
  console.log(boss.health, "boss health")
  document.getElementById("progress-boss").style.width = displayHealth.toString() + "%"

}

function bossAttack() {
  hero.health -= boss.attack + Math.floor((Math.random() * (5 * multiplier)))
  if (hero.health <= 0) {
    hero.health = 0,
      // console.log("hero ded"),
      boss.attack = 0
  }
  // console.log(hero.health, "hero health")
  document.getElementById("progress-hero").style.width = hero.health.toString() + "%"
}

function gameReset() {
  hero.health = 100,
    boss.health = 100,
    hero.level = 1,
    boss.level = 1,
    document.getElementById("progress-hero").style.width = hero.health.toString() + "%",
    document.getElementById("progress-boss").style.width = boss.health.toString() + "%"

}





setInterval(bossAttack, 3000)
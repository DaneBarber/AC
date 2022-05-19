const hero = {
  health: 100,
}

const superHero = {
  health: 100,
}

const boss = {
  health: 100,
}

function attackBoss() {
  boss.health -= 5
  console.log(boss.health, "boss health")
  document.getElementById("progress-boss").style.width = boss.health.toString() + "%"

}

function bossAttack() {
  hero.health -= 5
  console.log(hero.health, "hero health")
  document.getElementById("progress-hero").style.width = hero.health.toString() + "%"
}
// 模拟宝藏地图API
class TreasureMap {
  static getInitialClue() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("在古老的图书馆里找到了第一个线索...");
      }, 1000);
    });
  }

  static decodeAncientScript(clue) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!clue) {
          reject("没有线索可以解码!");
        }
        resolve("解码成功!宝藏在一座古老的神庙中...");
      }, 1500);
    });
  }

  static searchTemple(location) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random < 0.5) {
          reject("糟糕!遇到了神庙守卫!");
        }
        resolve("找到了一个神秘的箱子...");
      }, 2000);
    });
  }

  static openTreasureBox() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("恭喜!你找到了传说中的宝藏!");
      }, 1000);
    });
  }
}

async function findTreasureWithAsyncAwait() {
  try {
    const clue = await TreasureMap.getInitialClue();
    console.log(clue);
    const location = await TreasureMap.decodeAncientScript(clue);
    console.log(location);
    const box = await TreasureMap.searchTemple(location);
    console.log(box);
    const treasure = await TreasureMap.openTreasureBox();
    console.log(treasure);
  } catch (error) {
    console.error("任务失败:", error);
  }
}

// 1. 创建棋盘
const board = [
  ['-', '-', '-'],
  ['-', '-', '-'],
  ['-', '-', '-']
];

// 2. 创建人物
let player = {
  x: 1,
  y: 1
};

// 3. 移动人物
function movePlayer(direction) {
  switch (direction) {
    case 'w':
    case '上':
      if (player.y > 0) player.y--;
      break;
    case 's':
    case '下':
      if (player.y < 2) player.y++;
      break;
    case 'a':
    case '左':
      if (player.x > 0) player.x--;
      break;
    case 'd':
    case '右':
      if (player.x < 2) player.x++;
      break;
  }
}

// 测试移动人物
movePlayer('w'); // 向上移动
console.log(player); // 输出人物的新位置

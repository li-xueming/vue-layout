export default {
  /**
   * 获取指定长度的随机字符串
   * @param {int} length 指定长度
   */
  randomStr (length = 8) {
    let str = ''
    for (let i = 0; i < 8; i++) {
      str += this.randomChar()
    }
    return str
  },
  /**
   * 获取随机单字符串
   */
  randomChar () {
    const randomChar = Math.floor(Math.random() * 62)
    if (randomChar < 10) {
      return randomChar
    } else if (randomChar < 36) {
      return String.fromCharCode(randomChar + 55)
    } else {
      return String.fromCharCode(randomChar + 61)
    }
  }
}

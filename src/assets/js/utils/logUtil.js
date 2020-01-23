class LogUtils {
  constructor () {
    this.swith = process.env.NODE_ENV === 'development'
  }

  /**
   * 打印 info 级别日志
   * @param {Array} text
   * @param {String} context
   */
  info (context = 'Unknow', ...text) {
    if (this.swith) {
      if (Array.isArray(text) && text.length > 0) {
        let logs = text.map(t => {
          return `${context}:${t || ''}`
        })
        console.info(...logs)
      }
    }
  }

  /**
   * 打印 log 级别日志
   * @param {Array} text
   * @param {String} context
   */
  log (context = 'Unknow', ...text) {
    if (this.swith) {
      if (Array.isArray(text) && text.length > 0) {
        let logs = text.map(t => {
          return `${context}:${t || ''}`
        })
        console.log(...logs)
      }
    }
  }

  /**
   * 打印 debug 级别日志
   * @param {Array} text
   * @param {String} context
   */
  debug (context = 'Unknow', ...text) {
    if (this.swith) {
      if (Array.isArray(text) && text.length > 0) {
        let logs = text.map(t => {
          return `${context}:${t || ''}`
        })
        console.debug(...logs)
      }
    }
  }

  /**
   * 打印 error 级别日志
   * @param {Array} text
   * @param {String} context
   */
  error (context = 'Unknow', ...text) {
    if (this.swith) {
      if (Array.isArray(text) && text.length > 0) {
        let logs = text.map(t => {
          return `${context}:${t || ''}`
        })
        console.error(...logs)
      }
    }
  }
}

export default new LogUtils()

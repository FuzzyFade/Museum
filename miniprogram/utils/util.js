function formatTime(date) {
  var char = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十', '二十一', '二十二', '二十三', '二十四', '二十五', '二十六', '二十七', '二十八', '二十九', '三十','三十一']
  
  var year = char[parseInt(date.getFullYear() / 1000)] + char[parseInt(date.getFullYear() / 100) % 10] + char[parseInt(date.getFullYear() /10)%10] + char[date.getFullYear() % 10] 
  
  var month = char[date.getMonth()%13+1]
  var day = char[date.getDate()%32]
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  return year + "年" + month + "月" + day + "日" +" "+ hour + "时" + minute + "分" + second + "秒";
}

module.exports = {
  formatTime: formatTime
}
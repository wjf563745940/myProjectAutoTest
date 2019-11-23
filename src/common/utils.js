export const changeUpperCase = function changeUpperCase(str) {
  if (typeof str != 'string') {
    return "";
  }
  if(/^[a-zA-Z]+$/.test(str)){
    return str.toUpperCase()
  }else{
      return ''
  }
  
};

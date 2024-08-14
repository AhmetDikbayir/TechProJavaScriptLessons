const sortNumbersASC = (arr)=>{
    return arr.sort((a, b)=> a - b);
}

const sortNumbersDESC = (arr)=>{
    return arr.sort((a, b)=> b - a);
}

const sortTextsASC = (arr)=>{
    return arr.sort((a, b)=> a.localeCompare(b));
}

const sortTextsDESC = (arr)=>{
    return arr.sort((a, b)=> b.localeCompare(a));
}

export {sortNumbersASC, sortNumbersDESC, sortTextsASC, sortTextsDESC};
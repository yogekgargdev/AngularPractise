genRandomNumbers = function()
{
    var arrayToRet = [];
    for(let i=0;i<10;i++)
    {
        arrayToRet.push(Math.floor((Math.random()*9999)+1))
    }
    return arrayToRet;
}
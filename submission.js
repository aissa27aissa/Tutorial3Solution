//Input may be null, undefined, a number (including NaN), or a string representing a number
let even_predicate = function (value)
{
    let numValue = Number(value);
    
    if (value === null || value === undefined)
    {
        return false;
    }
        
    if (!Number.isFinite(numValue) || !Number.isInteger(numValue))
    {
        return false;
    }
    
    return numValue % 2 === 0;
};

//Input may be null, undefined, a number (including NaN), or a string representing a number
let odd_predicate = function (value)
{
    let numValue = Number(value);

    if (value === null || value === undefined)
    {
        return false;
    }

    if (!Number.isFinite(numValue) || !Number.isInteger(numValue))
    {
        return false;
    }

    return numValue % 2 !== 0;
};

//Input may be null, undefined, a number (including NaN), or a string representing a number
let undefined_predicate = function (value)
{
    return value === undefined;
};

//Input may be null, undefined, a number (including NaN), or a string representing a number
let null_predicate = function (value)
{
    return value === null;
};

//Input may be a predicate function, and a value
let check = function (predicate,value)
{
    return predicate(value);
};

//Input may be (not case sensitive): English, E, French, or F
let getDictionary = function (lang)
{
    //Input may be a number
    let englishDictionary = function (number)
    {
        switch (number)
        {
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            default:
                return "not included in dictionary";
        }      
    };

    //Input may be a number
    let frenchDictionary = function (number)
    {
        switch (number)
        {
            case 1:
                return "un";
            case 2:
                return "deux";
            case 3:
                return "trois";
            default:
                return "not included in dictionary";
        }   
    };

    if (lang.toLowerCase() === "e" || lang.toLowerCase() === "english")
    {
        return englishDictionary;
    }

    return frenchDictionary;
};

let englishTest1 = getDictionary("English");
console.log(englishTest1(1));
console.log(englishTest1(2));

let englishTest2 = getDictionary("e");
console.log(englishTest2(3));
console.log(englishTest2(4));

let frenchTest1 = getDictionary("French");
console.log(frenchTest1(1));
console.log(frenchTest1(2));

let frenchTest2 = getDictionary("f");
console.log(frenchTest2(3));
console.log(frenchTest2(4));

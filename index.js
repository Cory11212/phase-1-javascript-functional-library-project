const myEach = (collection, callback) => {
    if(typeof collection === 'object'){
        const objcoll = Object.values(collection)
        objcoll.forEach(element => callback(element))
    } else {
        collection.forEach(element => callback(element))
    }
    return collection
}

const myMap = (collection, callback) => {
    const newArray = []
    if(typeof collection === 'object'){
        const objcoll = Object.values(collection)
        objcoll.forEach(element => newArray.push(callback(element)))
    } else {
        collection.forEach(element => newArray.push(callback(element)))
    }
    return newArray
}

const myReduce = (collection, callback, acc)=>{
    if(typeof collection === 'object'){
        const objcoll = Object.values(collection)
        if(acc){
            let total = acc
            objcoll.forEach(element => total = callback(total, element, objcoll))
          return total
        }else{
            let total = objcoll[0]
            const newColl = objcoll.slice(1)
            newColl.forEach(element => total = callback(total, element, objcoll))
          return total
        }
    }else{
        if(acc){
            let total = acc
            collection.forEach(element => total = callback(total, element, collection))
          return total
        }else{
            let total = collection[0]
            const newColl = collection.slice(1)
            newColl.forEach(element => total = callback(total, element, collection))
          return total
        }
    }  
}

const myFind = (collection, predicate) => {
    if(typeof collection === 'object'){
        const objcoll = Object.values(collection)
        let found
        for (let i = 0; i < objcoll.length; i++){
            let isFound = predicate(objcoll[i])
            if(isFound){
                found=objcoll[i]
                break
            }
        }return found
    }else{
        let found
        for (let i = 0; i < collection.length; i++){
            let isFound = predicate(collection[i])
            if(isFound){
                found=collection[i]
                break
            }
        }
        return found
        
    }  
}

const myFilter = (collection, predicate) => {
    if(typeof collection === 'object'){
        const objcoll = Object.values(collection)
        let found = []
        for (let i = 0; i < objcoll.length; i++){
            let isFound = predicate(objcoll[i])
            if(isFound){
                found.push(objcoll[i])
                
            }
        }return found
    }else{
        let found = []
        for (let i = 0; i < collection.length; i++){
            let isFound = predicate(collection[i])
            if(isFound){
                found.push(collection[i])
                
            }
        }
        return found
        
    }  
}

const mySize = (collection) => {
    if(typeof collection === 'object'){
        const objcoll = Object.values(collection)
        return objcoll.length
    } else {
        return collection.length
    }
}

const myFirst = (array, n)=>{
    if(n){
        return array.slice(0, n)        
    }else{
        return array[0]
    }
}  

const myLast = (array, n)=>{
    if(n){
        return array.slice(-n)        
    }else{
        return array[array.length-1] 
    }
}  

const myKeys = (object) => {
    const newArray = Object.keys(object)
    return newArray
}

const myValues = (object) => {
    const newArray = Object.values(object)
    return newArray
}
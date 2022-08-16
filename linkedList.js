const LinkedList = () =>{
    let list = [] 
    const append = (value) => {
        list.push(value)
        return list
    }
    const preappend = (value) => {
        list.unshift(value)
        return list
    }
    const size = () => {
        return list.length
    }
    const head = () => {
        return list[0]
    }
    const tail = () => {
        return list[list.length-1]
    }
    const at = (index) => {
        return list[index]
    }
    const pop = () => {
         list.pop()
         return list
    }
    const contains = (value)=>{
        return list.includes(value)
    }
    const find = (value) => {
        return list.indexOf(value)
    }
    const toString = () => {
        let string  =''
        for(i=0 ; i<list.length;i++){
            if (list.length - i == 1){
                string += list[i].toString() + ' => null'
            }else{
                string += list[i].toString() + ' => '
            }
            
        }
        return string
    }
    const test = () => {
        return 'factory works'
    }
    const removeAt = (index) => {
        list.splice(index, 1)
        return list
    }
    const insertAt = (value, index) => {
        list.splice(index,0,value)
        return list
    }
    return { append, preappend, size, head, tail, at, pop, contains, find, toString, test, removeAt,insertAt}
}

const Node = (value=null, nextNode=null) => {
    return {value, nextNode}
}

let list = LinkedList()
console.log(list.test())
console.log('append',list.append('shady'))
console.log('append2', list.append('nashat'))
console.log('prepend' ,list.preappend('first'))
console.log('head', list.head())
console.log('tail ' , list.tail())
console.log('at', list.at(1))

console.log('size' ,  list.size())
console.log('find' , list.find('shady'))
console.log('contains' , list.contains('shady'))
console.log('string ', list.toString() )
console.log('remove at', list.removeAt(1))
console.log('insert' , list.insertAt('NewShady',1))
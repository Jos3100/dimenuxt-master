import { readFileSync, writeFileSync } from "node:fs"

export default defineEventHandler(async event => {
    //const datos = getQuery(event);
    const data: any = await $fetch(`https://jsonplaceholder.typicode.com/todos/${1}`)
    saveData([data])
    //writeFileSync('../todos.json', JSON.stringify(datos));
    const jsonData = readFileSync('./todos.json')
    return jsonData
})

const saveData = (data: any) => {
    const stringifyData = JSON.stringify(data);
    writeFileSync('./todos.json', stringifyData);
};